# Screen: RecognitionResult

**Wireframe Node ID:** `12:302`
**Final Screen Node ID:** `165:175` (страница «UI», SectionNode «Screens»)

## Composition

Root: `Screen/RecognitionResult`, width FIXED 375, height FIXED 812, VERTICAL, fill `surface-default`.

### Header
- HORIZONTAL, FILL × HUG, padding `space-4`
- Иконка `times` (24px, `text-muted`)

### PhotoPreview
- Отдельный блок, FILL × FIXED(320), fill `surface-subtle` (реальное фото знака — законный плейсхолдер)
- `Badge` instance, variant=success (Node ID `43:166` → `Variant=success`), текст override «Распознано точно», наложен ABSOLUTE в левый нижний угол (offset `space-3`)

> Текст бейджа изменён с «Уверенность: Высокая» на «Распознано точно» — исходная формулировка выдавала ML-метрику (confidence score) напрямую в интерфейс, пользователю она ничего не говорит. Новая формулировка — про результат («можно доверять»), а не про внутреннюю уверенность модели.

### SummaryCard
- VERTICAL, FILL × HUG, padding `space-4`, itemSpacing `space-2`
- Строка (HORIZONTAL, space-between): пусто слева / иконка `volume-up` (20px, `text-muted`) справа — идёт озвучка
- Заголовок: «Уступите дорогу», `DS/Heading/lg`, `text-default`
- Текст: «Вы обязаны уступить дорогу транспортным средствам, движущимся по главной дороге», `DS/Body/base`, `text-muted`

### ActionsRow
- HORIZONTAL, FILL × HUG, padding `space-4`, itemSpacing `space-2`, три кнопки поровну (FILL каждая)
- `Button` instance, variant=secondary, state=default, текст «Переснять»
- `Button` instance, variant=primary, state=default, текст «Повторить»
- `Button` instance, variant=ghost, state=default, текст «Подробнее»

Между SummaryCard и ActionsRow — `Spacer` (FILL), прижимает ActionsRow к низу экрана (812px).

## Edge cases

### NotRecognized — добавлено по итогам `screens_audit`
Раздел 6 аудита выявил разрыв: сценарий «знак сфотографирован, но модель не смогла его определить» (в отличие от низкой уверенности, обрабатываемой на Camera) нигде не был закрыт.
- Заменяет SummaryCard, VERTICAL, по центру, padding `space-6`, itemSpacing `space-3`
- Иконка `question-circle` (40px, `text-muted`)
- Текст «Не удалось точно определить знак», `DS/Body/sm Medium`, `text-default`, по центру
- `Button` instance, variant=secondary, текст «Переснять»
- Visibility: `false` по умолчанию

## Tokens used
- Цвета: `surface-default`, `surface-subtle`, `text-default`, `text-muted`
- Отступы: `space-2`, `space-3`, `space-4`

## Иконки
- `times` (Header, 24px)
- `volume-up` (SummaryCard, 20px)

Плейсхолдер — только PhotoPreview (реальное фото знака).
