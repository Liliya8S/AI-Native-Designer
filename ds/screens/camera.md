# Screen: Camera

**Wireframe Node ID:** `12:291`
**Final Screen Node ID:** `160:173` (страница «UI», SectionNode «Screens»)

## Composition (передизайн — edge-to-edge тёмная камера, было слишком похоже на wireframe)

Root: `Screen/Camera`, width FIXED 375, height FIXED 812, VERTICAL, fill `surface-inverse` (тёмная, новый токен) — весь экран, включая Header и CaptureBar, одна непрерывная тёмная поверхность (имитация живого фида камеры на весь экран, без светлых плашек-секций).

### Header
- HORIZONTAL, FILL × HUG, space-between, padding `space-4`, **прозрачный фон** (просвечивает `surface-inverse` экрана)
- Иконка `arrow-left` (24px, `text-on-action` — белая) на круглой полупрозрачной подложке 40×40, fill `overlay-scrim`
- Иконка `bolt` (24px, `text-on-action`) на такой же подложке — паттерн подсмотрен в референсе нативной камеры (полупрозрачные chip-кнопки поверх живого фида)

### Viewfinder
- VERTICAL, FILL × FILL, по центру, **прозрачный фон** (просвечивает `surface-inverse`)
- FramingGuide: не квадрат целиком, а **4 уголка-скобки** (по 2 прямоугольника 24×3 на угол, `text-on-action`) — паттерн QR-сканера, читается «продуктовее» дашед-рамки
- Подпись под рамкой: «Наведите на знак», `DS/Body/sm Medium`, `text-on-action` (белая, экран тёмный)

### CaptureBar
- HORIZONTAL, FILL × HUG(76), space-between, padding `space-6` horizontal, по центру вертикально, **прозрачный фон**
- Слева: `LastScanThumb`, rounded rect 40×40, `surface-subtle` (последний скан, локальная композиция — не 3+ копий)
- Центр: `CaptureButton` — теперь двухцветная композиция 84×84: внешнее кольцо (stroke `border-decorative`, 3px) + внутренний залитый круг 68×68 (`text-on-action`) — крупнее и заметнее прежней плоской кнопки
- Справа: пустой спейсер 40×40 (симметрия, зарезервировано под будущий toggle)

## Edge cases

### Loading (поверх Viewfinder)
- Затемнение: прямоугольник FILL на весь Viewfinder, fill `overlay-scrim`
- По центру: кольцо-спиннер (ellipse 32×32, без заливки, stroke `text-on-action` 3px) + текст «Распознаём...», `DS/Body/sm Medium`, `text-on-action`
- Visibility: `false` по умолчанию

### RetryCapture (баннер над CaptureBar)
- HORIZONTAL, FILL × HUG, padding `space-3`, по центру
- Fill: `bg-warning-subtle`
- Текст: «Не удалось распознать чётко. Повторите съёмку», `DS/Body/sm`, `text-default`
- Visibility: `false` по умолчанию

### Error (замена Viewfinder целиком)
- VERTICAL, FILL × FILL, по центру, itemSpacing `space-3`
- Fill: `surface-subtle`
- Иконка `camera-slash` (48px, `text-muted`)
- Текст «Нет доступа к камере», `DS/Body/sm Medium`, `text-default`
- `Button` instance, variant=secondary, state=default, текст «Открыть настройки»
- Visibility: `false` по умолчанию

## Tokens used
- Цвета: `surface-default`, `surface-subtle`, `border-strong`, `text-on-action`, `text-default`, `text-muted`, `overlay-scrim`, `bg-warning-subtle`
- Отступы: `space-3`, `space-4`, `space-6`

## Иконки
- `arrow-left`, `bolt` (Header, 24px, белые)
- `camera-slash` (Error state, 48px)

Плейсхолдеров, кроме честного плейсхолдера живого фида камеры (Viewfinder fill), на экране нет.
