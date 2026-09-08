# Screen: TestSession

**Final Screen Node ID:** `250:229` (страница «UI», SectionNode «Screens»)
Собрано без отдельного wireframe — по прямому запросу, напрямую из готового компонента `QuestionCard`.

## Composition

Root: `Screen/TestSession`, width FIXED 375, height FIXED 812, VERTICAL, fill `surface-default`.

### Header
- HORIZONTAL, FILL × HUG, space-between, padding `space-4`
- Иконка `times` (24px, `text-muted`) — выход из теста
- «Вопрос 3 из 10», `DS/Body/sm`, `text-muted` — прогресс

### QuestionCard
- `QuestionCard` instance (Node ID `67:193`), обёрнут в контейнер с горизонтальным padding `space-4`
- Override контента под сценарий «фото дороги»:
  - Вопрос: «Кто проедет перекрёсток первым?»
  - Ответы: A) Автомобиль А (красный), B) Автомобиль Б (синий), C) Оба одновременно по очереди, D) Ни один — впереди пешеход
- Внутри уже есть: ImagePlaceholder (фото ситуации), 4× `AnswerOption`, `Button` primary «Продолжить» + `Button` secondary «Пропустить»

Между QuestionCard и низом экрана — `Spacer` (FILL).

## Найдено и починено по пути
Баг с непривязанной белой заливкой (`AnswerList`, `Actions`) сидел не на экране, а в самом мастер-компоненте `QuestionCard` — не было видно, пока он стоял только на белом фоне. Починено на уровне мастера (`67:193`), автоматически применилось ко всем инстансам.

## Tokens used
Наследуются из компонентов Header/QuestionCard — ничего нового.

## Иконки
- `times` (Header, 24px)
