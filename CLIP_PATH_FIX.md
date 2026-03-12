# Исправление прозрачности clip-path на NVIDIA + ANGLE D3D11

## Проблема

На некоторых GPU (NVIDIA GeForce RTX 4060 Ti, ANGLE D3D11 backend, Chrome/YaBrowser на Windows)
элементы с `position: sticky` + `clip-path` рендерятся с **непрозрачным backing store** в GPU compositor.

Область вне clip-path показывает фоновый цвет родителя (кремовый `--ok-cream`) вместо того,
чтобы быть прозрачной и показывать предыдущий sticky-слой (Hero-секцию).

Проблема связана с тем, как ANGLE D3D11 создаёт compositing layers для sticky-элементов —
backing store layer'а не содержит альфа-канал.

На Vercel (другой GPU/драйвер) проблема не воспроизводится.

## Подтверждённые данные

- **GPU:** NVIDIA GeForce RTX 4060 Ti (0x00002803) Direct3D11 vs_5_0 ps_5_0, D3D11
- **Браузер:** Chrome 144 / YaBrowser 26.3 на Windows 10
- **devicePixelRatio:** 1.25
- **colorDepth:** 24

## Что НЕ помогло

1. CSS-хинты (`will-change`, `transform: translateZ(0)`, `backfaceVisibility: hidden`, `backdrop-filter: blur(0px)`, `isolation: isolate`) — не решили проблему
2. `opacity: 0.999` — не помогло
3. Замена SVG `clip-path: url(#id)` на CSS `clip-path: polygon(...)` — не помогло
4. `mask-image` через SVG data URL — не анимировалось
5. `mask-image` через canvas `toDataURL()` — маска работала, но sticky-layer всё равно непрозрачный
6. Canvas overlay (рисование маски поверх контента) — не решает проблему прозрачности
7. Удаление `bg-[var(--ok-cream)]` с корневого div — цвет стал чёрным вместо кремового, прозрачности не появилось

## Решение

**Заменить `position: sticky` на `position: fixed`** для секций с clip-path анимацией.

Fixed-элементы создают **другой тип compositing layer** в GPU compositor, у которого backing store
содержит альфа-канал. Clip-path корректно делает область вне маски прозрачной.

### Ключевые изменения:

```tsx
// Вместо:
<div style={{ position: 'sticky', top: 0 }}>
  {/* clip-path контент */}
</div>

// Используем:
<div ref={sentinelRef} className="h-[100vh]" /> {/* placeholder в document flow */}
<div style={{
  position: useRelative ? 'relative' : 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100vh',
  zIndex,
  clipPath: '...',
}}>
  {/* clip-path контент */}
</div>
```

Sentinel div (`h-[100vh]`) занимает место в document flow, которое раньше занимал sticky-элемент.
Fixed-элемент позиционируется поверх viewport'а.
При переключении в relative-режим — layout возвращается к обычному потоку.
