# Screen: Home

**Wireframe Node ID:** `12:253`
**Final Screen Node ID:** `151:130` (страница «UI», SectionNode «Screens»)

## Composition

Root: `Screen/Home`, width FIXED 375, height FIXED 812 (мобильный вьюпорт), VERTICAL, fill `surface-default`. Между `RecentScans` и `TabBar` — `Spacer` (FILL), прижимает TabBar к низу.

### Header
- `Navbar` instance (Node ID `44:147`), FILL × FIXED(56)
- Override текста: «ПДД Ассистент»; иконка справа — `settings` (уже дефолт в мастере)

### HeroCTA (переделано — отдельная hero-секция, не просто блок в общем потоке)
- VERTICAL, FILL × HUG, fill `surface-subtle` (отделяет секцию от остального белого экрана), padding `space-8`, itemSpacing `space-4`, по центру
- Заголовок: «Наведите камеру на знак», `DS/Heading/lg`, `text-default`, по центру
- `CircleButtonGroup` (160×160, кастомная композиция, не компонент — единственный экземпляр):
  - 2 декоративных кольца (ellipse, без заливки, обводка `border-decorative` → accent-100, 160×160 и 136×136, ABSOLUTE по центру)
  - Основной круг 120×120, fill `surface-action-primary`, по центру
  - Иконка `camera` (Unicons, 40×40, `text-on-action`), по центру поверх круга
  - Сама кнопка = круг целиком; отдельной прямоугольной Button-кнопки под ней больше нет
- Подпись: «Распознать знак за 3 секунды», `DS/Body/xs`, `text-muted`, по центру

### SecondaryCTA
- VERTICAL, FILL × HUG, padding `space-4` (верх меньше — `space-2`), itemSpacing `space-1`, по центру
- `Button` instance, variant=secondary, state=default, текст «Начать тест»
- Подпись: «Билеты ПДД, офлайн», `DS/Body/xs`, `text-muted`

### ReviewQueueTeaser
- HORIZONTAL, FILL × HUG, padding `space-4`, space-between, по центру вертикально
- Слева: «В повторении: 4 темы», `DS/Body/sm Medium`, `text-default`
- Справа: строка (HORIZONTAL, itemSpacing `space-1`): «Продолжить», `DS/Body/sm`, `surface-action-primary` + иконка `angle-right` 16px `surface-action-primary`

### RecentScans
- VERTICAL, FILL × HUG, padding `space-4`, itemSpacing `space-3`
- Заголовок: «Недавние сканы», `DS/Body/sm Medium`, `text-default`
- 3 × `ScanRow` instance (Node ID `148:166`), FILL width:
  1. «Уступите дорогу» / «Сегодня, 14:20»
  2. «Пешеходный переход» / «Вчера, 09:10»
  3. «Скользкая дорога» / «18 авг»

### TabBar
- HORIZONTAL, FILL × FIXED(56), space-between, padding `space-4` horizontal, по центру вертикально, border-top `border-default`
- 4 × `TabBarItem` instance (Node ID `148:177`), иконка внутри каждого инстанса подменяется через `swapComponent`:
  1. Home — state=active, иконка `home`, подпись «Главная»
  2. Tests — state=inactive, иконка `clipboard`, подпись «Билеты»
  3. Camera — state=inactive, иконка `camera`, подпись «Камера»
  4. History — state=inactive, иконка `history`, подпись «История»

## Edge cases

### Empty state (RecentScans)
- Заменяет 3× ScanRow внутри секции RecentScans
- VERTICAL, по центру, padding `space-8` (32) сверху/снизу
- Иконка `image` (Unicons, 48×48, `text-muted`)
- Текст «Пока нет сканов», `DS/Body/sm`, `text-muted`
- Visibility: `false` по умолчанию

### Overflow-ссылка (RecentScans) — добавлено по итогам `screens_audit`
- Всегда видима, идёт после 3× ScanRow: «Смотреть всю историю →», `DS/Body/sm`, `surface-action-primary` + `angle-right`
- Ведёт на будущий экран History (sitemap)

### Loading skeleton (RecentScans) — добавлено по итогам `screens_audit`
- 3× `ScanRow` instance с текстом-заглушкой «Загрузка...» / «...», opacity 0.4
- Visibility: `false` по умолчанию

### Error state (RecentScans) — добавлено по итогам `screens_audit`
- Иконка `exclamation-circle` (32px, `text-muted`) + текст «Не удалось загрузить историю», `text-muted`
- Visibility: `false` по умолчанию

## Tokens used
- Цвета: `surface-default`, `surface-subtle`, `surface-action-primary`, `text-default`, `text-muted`, `border-default`
- Отступы: `space-1`, `space-2`, `space-3`, `space-4`, `space-8`
- Радиусы: `radius-md`

## Иконки
- `camera` (HeroCTA, 64px)
- `angle-right` (ReviewQueueTeaser-ссылка, ScanRow-chevron)
- `home` / `clipboard` / `camera` / `history` (TabBar, 24px, через swapComponent на инстансах TabBarItem)

Плейсхолдеров, кроме edge-case иллюстрации (`image`, тоже реальная иконка из Unicons, не серый прямоугольник), на экране нет.
