# Foundation

**Бриф:** Edtech, b2c, мобильное приложение, тон «дружелюбный, простой», локаль ru.

> Платформа mobile → минимальная высота тач-таргетов (кнопки, инпуты, иконки-кнопки) — 44pt. Учитывается при отрисовке компонентов в Фазе 3.

## Слой 1 — примитивные токены

### Палитра
- accent-500 = #161616 ← основной акцент (почти чёрный)
- accent-100 = #C5C5C5, accent-300 = #686868, accent-700 = #0F0F0F, accent-900 = #090909 ← оттенки акцента
- gray-00 = #FFFFFF, gray-50 = #F9FAFB, gray-100 = #F3F4F6, gray-200 = #E5E7EB, gray-300 = #D1D5DB, gray-500 = #717172, gray-700 = #31373B, gray-900 = #111827, gray-950 = #030712 ← 9 нейтралов
  > gray-500/gray-700 изначально были холодными (#6B7280/#374151). Первая правка — тёплый Tailwind Stone (#78716C/#44403C). Пользователь затем продублировал свотчи прямо в Figma, вручную подобрал финальные цвета (#717172 — нейтральный серый; #31373B — тёмный сине-серый) и попросил взять их за основу — это и есть текущие значения. Временные свотчи-компараторы удалены после переноса значений в переменные. gray-900/gray-950 не трогали, остаются исходными холодными — пересмотреть отдельно, если понадобится единообразие.
- success-500 = #27CA65, warning-500 = #F59E0B, error-500 = #FC4F50, info-500 = #3B82F6 ← функциональные
- category-red-500 = #D92D20, category-blue-500 = #1F5FD1 ← категоризация контента (не статус!), взято из «Тёрн 2»: красный/синий помечают тип знака или темы, а не ошибку/инфо-сообщение
- category-red-a12 = rgba(217,45,32,0.12), category-blue-a12 = rgba(31,95,209,0.12) ← подложки для category-* цветов
- scrim-20 = rgba(0,0,0,0.2), scrim-40 = rgba(0,0,0,0.4), scrim-60 = rgba(0,0,0,0.6) ← прозрачные, затемнение фона под модалками/оверлеями
- success-a12 = rgba(39,202,101,0.12), warning-a12 = rgba(245,158,11,0.12), error-a12 = rgba(252,79,80,0.12), info-a12 = rgba(59,130,246,0.12) ← прозрачные, статусный цвет поверх подложки (подложка под алертами/бейджами)

### Типографика
- font-sans = Inter (полная поддержка кириллицы)
- size-xs = 12, size-sm = 14, size-base = 16, size-lg = 18, size-xl = 20, size-2xl = 24, size-3xl = 32, size-4xl = 48
- weight-regular = 400, weight-medium = 500, weight-semibold = 600, weight-bold = 700
- line-height-base = 1.5 ← +5% от 1.43 под кириллицу

### Радиусы
- radius-none = 0, radius-sm = 4, radius-md = 8, radius-md-lg = 12, radius-lg = 16, radius-xl = 24 ← radius-md-lg добавлен по правке пользователя: у Button радиус Size=lg (16/52≈0.31) был непропорционально крупнее радиуса Size=md (8/44≈0.18) — заметно на глаз при сравнении кнопок разных размеров рядом. radius-md-lg=12 — компромисс между точной пропорцией (~13.5) и шагом сетки, используется только для Button Size=md. radius-xl добавлен для крупных карточек/контейнеров (взято из эксплорейшна «Тёрн 2»)

### Отступы
- space-1 = 4, space-2 = 8, space-3 = 12, space-4 = 16, space-6 = 24, space-8 = 32, space-12 = 48, space-16 = 64

### Тени
- shadow-sm = 0px 1px 2px rgba(0,0,0,0.05)
- shadow-md = 0px 4px 8px rgba(0,0,0,0.08)
- shadow-lg = 0px 8px 24px rgba(0,0,0,0.12)
(мягкие, нейтральный чёрный, без брендового цвета)

## Слой 2 — смысловые токены

### Поверхности
- surface-default → gray-00
- surface-subtle → gray-50
- surface-action-primary → accent-500
- surface-action-primary-hover → accent-700
- surface-inverse → gray-900 ← тёмная поверхность, добавлена для edge-to-edge экрана камеры

### Текст
- text-default → gray-900
- text-muted → gray-500
- text-on-action → gray-00
- text-error → error-500
- text-success → success-500 ← добавлен для позитивных метрик (StatCard variant=success)

### Обводки
- border-default → gray-200
- border-strong → gray-300
- border-error → error-500
- border-focus-ring → accent-500 ← добавлен при расширении Input (component_variants), 2px OUTSIDE
- border-decorative → accent-100 ← добавлен для декоративных колец вокруг круглой CTA-кнопки (Home HeroCTA)

### Состояния
- bg-success → success-500
- bg-warning → warning-500
- bg-error → error-500
- bg-info → info-500

### Состояния (subtle-подложка)
- bg-success-subtle → success-a12
- bg-warning-subtle → warning-a12
- bg-error-subtle → error-a12
- bg-info-subtle → info-a12

### Категоризация (не статус)
- bg-category-red → category-red-500, bg-category-red-subtle → category-red-a12, text-category-red → category-red-500
- bg-category-blue → category-blue-500, bg-category-blue-subtle → category-blue-a12, text-category-blue → category-blue-500
- Используются для смысловой категоризации контента (тип знака, тема билета и т.п.), а не для статусов успеха/ошибки — для статусов остаются success/warning/error/info

### Оверлей
- overlay-scrim → scrim-40 ← затемнение фона под Modal и другими оверлеями

### Подложки-«колодцы»
- surface-well → gray-100 ← добавлен при импорте `screens_import_9` для вложенных подложек, которые на ступень темнее surface-subtle (gray-50): плейсхолдер фото/календарь/DateBox/аватар-заглушка, трек ProgressBar, IconBox уже использовал gray-50 (surface-subtle) — surface-well для новых кейсов, где по референсу нужен более заметный, но не акцентный фон

### Типографика — рекомендация по заголовкам
- Для крупных заголовков экрана/карточки (например, название знака на RecognitionResult) использовать `DS/Heading/2xl` (24px, Semi Bold) вместо более мелких стилей — крупнее и увереннее считывается, взято из «Тёрн 2».

### Типографика — точечные правки стилей (сделаны руками в Figma)
- `DS/Body/base` (16px): line-height вручную сужен с 150% (дефолт `line-height-base`) до 130% — плотнее, отдельный override у этого стиля, не применять к остальным `DS/Body/*`/`DS/Heading/*` без явного решения.

## Аудит страницы Foundation (screens_import_9)

Проверка витрины токенов в Figma (страница «Foundation», секция с сэмплами) против реального набора Variables — обнаружено расхождение: все токены, добавленные после исходного `ds_baseline` (расширения `component_variants`, «Тёрн 2», и этот прогон), существовали как Variables и использовались в компонентах/экранах, но не были отражены сэмплами на самой странице Foundation. Добавлены недостающие сэмплы:
- `Radii`: `radius-xl` (было только none/sm/md/lg)
- `Palette`: новая строка «Category» (`category-red-500`, `category-blue-500`), `category-red-a12`/`category-blue-a12` в строку Transparent
- `Semantic → Surfaces`: `surface-inverse`, `surface-well`
- `Semantic → Text`: `text-success`
- `Semantic → Borders`: `border-focus-ring`, `border-decorative`
- `Semantic`: новая строка «Category» (`bg-category-red`, `bg-category-blue`, `bg-category-red-subtle`, `bg-category-blue-subtle`, `text-category-red`, `text-category-blue`)

Также при этом починен баг на инстансе Badge `Variant=accent` в UI-ките — текст «Сегодня» рендерился чёрным на чёрном фоне при просмотре самого мастер-компонента изолированно (на реальных экранах текст был читаемым за счёт корректного резолва переменной в контексте использования). Причина — `setBoundVariableForPaint` не всегда синхронизирует литеральный fallback-цвет с фактическим значением переменной при первом биндинге. Пофикшено прямой установкой `fills` с явным литералом + alias одновременно.

## Слой 3 — компонентные токены
*На стартовом наборе не нужен. Добавляется отдельной директивой при расширении компонентов вариантами и состояниями (button-padding-y, input-height и т.д.).*
