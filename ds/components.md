# Components — каталог UI-кита

Figma-файл: `03HBFy4ijiaHZcbkVTeEIU`.
- Страница «Foundation» — палитра, типографика, радиусы, отступы: [ссылка](https://www.figma.com/design/03HBFy4ijiaHZcbkVTeEIU/Pix-Perfct--Tati-R-?node-id=33-323)
- Страница «Components» — все компоненты во фрейме «Components» (базовый набор `ds_baseline` + расширения `grow_ui_kit`/разбор эксплорейшна «Тёрн 2» объединены вручную): [ссылка](https://www.figma.com/design/03HBFy4ijiaHZcbkVTeEIU/Pix-Perfct--Tati-R-?node-id=55-810)

Все компоненты — настоящие `ComponentNode`/`ComponentSet`, доступны в Assets-панели Figma. Все заливки/обводки привязаны к Semantic Variables, вся типографика — к DS-стилям (`DS/Heading/*`, `DS/Body/*`, `DS/Label/xs`).

## Действия

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| Button | Основное действие пользователя | primary: default \| disabled \| loading; secondary: default \| disabled; ghost: default \| disabled; Size=md(44px, radius-md) \| lg(52px, radius-lg) | 368:143 |

> Расширено (`component_variants`): добавлены disabled (все варианты) и loading (только primary), 7 ячеек.
> `hover` не добавляли и затем убрали (3 ячейки) — продукт мобильный, курсора нет, hover никогда не сработает.
> `loading` оставили только у primary — по PRD спиннер показывается лишь на основном CTA (распознавание, проверка ответа); secondary/ghost такого сценария не имеют.
> Новых Semantic не потребовалось — disabled — opacity 0.4, loading — статичный плейсхолдер без анимации.
> Добавлен `Size` (md/lg): на экранах «Тёрн 2» кнопки вручную растягивали до 52px, что разошлось с мастер-компонентом (44px/radius-md). Теперь это настоящий вариант — `Size=lg` даёт 52px высоты и `radius-lg`(16) вместо `radius-md`(8), применяется ко всем трём Variant × их State. Итого 14 ячеек.
> **Правка пропорций (аудит):** `Size=md` радиус сменён с `radius-md`(8, соотношение к высоте 0.18) на новый `radius-md-lg`(12) — было заметно непропорционально мельче `Size=lg` (0.31) при визуальном сравнении. Заодно починен баг: `Size=lg` радиус был зашит напрямую (16px), не привязан ни к какой Variable — перепривязан к `radius-lg`.
> **Used in:** screens/home, screens/camera, screens/recognition-result, screens/test-session (Size=md); screens/2a, screens/2c (Size=lg)

| IconButton | Кнопка под иконку (тач-таргет) | Variant=Surface: dark (44px, `surface-action-primary`, белая иконка — исходный дефолт) \| light (32px, `surface-well`, тёмная иконка — светлые экраны) \| translucent (40px, полупрозрачный белый 12%, белая иконка — тёмные AR-экраны) | 585:832 |

> Расширен в COMPONENT_SET при аудите `screens_import_9`: на экранах 4a/3b/3g/3d/3e/3f/3h/3a иконки шапки изначально собирались ad-hoc (локальные фреймы `IconBackdropLight`/`IconBackdrop`, копипаста кода в каждом скрипте) вместо инстансов — заменены на реальные инстансы, `Surface=dark` — старый мастер (44:142), id и все существующие инстансы (Navbar) сохранены при `combineAsVariants`.
> **Used in:** screens/home (light, вложенно внутри Navbar), screens/recognition-result-v2 (4a, light — times/volume-up), screens/test-session-v2 (3b/3g, light — arrow-left), screens/booking-instructor (3d, light), screens/my-lessons (3e, light), screens/profile (3f, light — sign-out-alt), screens/3h, screens/3a (translucent — times/setting)

## Ввод

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| Input | Однострочное текстовое поле | type: text \| search; state: default \| error \| focus \| filled | 43:149 |

> Расширено (`component_variants`): добавлены type (search) и состояния focus/filled, 2×4 = 8 ячеек.
> Новый Semantic в Foundation: `border-focus-ring`.

## Контейнеры

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| Card | Контейнер для заголовка и краткого текста | — | 43:153 |
| Modal | Модальное окно с подтверждением действия (собрано из инстансов Button) | — | 44:139 |

## Данные

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| StatCard | Карточка метрики: крупное число/значение + подпись, на цветной подложке (без иконки) | Variant=neutral / red / blue / success | 452:140 |

> Добавлен по итогам разбора эксплорейшна «Тёрн 2»: подложка в цвет акцента (`bg-category-red-subtle` / `bg-category-blue-subtle` / `bg-success-subtle`) для категоризации метрики, `radius-xl`. Пробовали добавить иконку над значением — не подошло по референсу (там чистый номер+подпись без иконки), откатили. `success` — вариант для позитивных метрик (% успеха), токен `text-success` → `success-500` (пока не используется на экранах, доступен на будущее).
> **Used in:** screens/2a («4 темы в повторении» — blue, «86% верных в билетах» — success/зелёная, т.к. это позитивный результат)

| InfoRow | Плоская компактная строка: иконка в квадрате слева + однострочный текст справа, опциональная ссылка-трейлинг справа (boolean `Show Trailing Link`) | — | 517:140 |

> Появился как более лёгкая замена StatCard/InfoPill для второстепенных данных, которые не являются кликабельным паттерном (по референсу — плоские карточки с иконкой из приложения автошколы). `radius-lg`, фон `surface-default`, обводка `border-default`, иконка на подложке `surface-subtle`.
> Формализован в реальный `ComponentNode` при импорте `screens_import_9` (раньше был ad-hoc инстанс на 2c без переиспользуемого мастера). Добавлено boolean-свойство `Show Trailing Link`, управляющее видимостью дочернего `TrailingLink` (текст + `angle-right`) — нужно для варианта с CTA-ссылкой справа («→ Пройти»).
> **Used in:** screens/2c (без trailing), screens/recognition-result-v2 (4a, trailing=true, «Пройти»)

| ProgressBar | Прогресс-бар с подписью и процентом (LabelRow + Track + Fill) | Variant=Fill: accent (тёмный, `surface-action-primary`) \| category-blue (`bg-category-blue`) | 514:142 |

> Добавлен при импорте `screens_import_9` — паттерн повторился 4+ раз (вопрос теста, общий прогресс на главной, 2× на профиле), по правилу «3+ копий → компонент». Track — `surface-well`, `radius-sm` (даёт полную пилюлю при высоте 8px). Ширина `Fill` — ручной override на инстансе (процент задаётся визуально, как в остальных прогресс-барах проекта).
> **Used in:** screens/test-session-v2 (3b/3g), screens/home-v2 (3c, общий прогресс), screens/profile (3f, ×2: «Пакет ПДД» — blue, «Вождение» — accent)

| TimeSlotRow | Строка слота записи к инструктору: DateBox + время/мастер + статус-индикатор | State=default (обводка) \| selected (обводка `border-focus-ring` 2px, кружок-check) \| disabled (opacity 0.4) | 516:155 |

> Добавлен при импорте `screens_import_9`, 3 копии на одном экране записи. DateBox — `surface-well`, `radius-md`.
> **Used in:** screens/booking-instructor (3d)

| LessonRow | Строка занятия в списке «Мои занятия»: аватар-инициалы + время/мастер + статус | Status=past (Badge variant=neutral «Прошло») \| today (Badge variant=accent «Сегодня», обводка `border-focus-ring`) \| upcoming (chevron `angle-right`) | 516:183 |

> Добавлен при импорте `screens_import_9`, 3 копии на одном экране. Аватар — `surface-well` circle с инициалами `text-muted`.
> **Used in:** screens/my-lessons (3e)

| ListItem | Строка меню/настроек: иконка + текст + опциональный шеврон, нижняя обводка `border-default` | Style=default (`text-default`, шеврон) \| destructive (`text-error`, без шеврона) | 517:139 |

> Добавлен при импорте `screens_import_9`, 3 копии на экране профиля («История вождений», «Настройки», «Выйти» — последняя destructive).
> **Used in:** screens/profile (3f)

| TopicNode | Карточка темы в сетке каталога Tests (в духе Duolingo) | State=locked / available / completed | 65:144 |
| ScanRow | Строка одного скана в списке (Home → RecentScans, History) | Category=neutral / red / blue | 364:152 |

> Расширен вариантом `Category`: превью (Thumb) теперь показывает силуэт знака нужного цвета — красный треугольник (приоритет/предупреждение) или синий ромб (информационный знак) — вместо пустой цветной плашки. `neutral` — старое поведение (просто `surface-subtle`, без иконки), используется, когда категория знака ещё не определена.
> **Used in:** screens/home (Category=neutral), screens/2a (Category=red/blue)

| AnswerOption | Один вариант ответа: буква + текст слева, радиокнопка справа | State=default / selected / correct / incorrect | 67:163 |
| QuestionCard | Карточка вопроса теста целиком (ImagePlaceholder + AnswerOption×4 + инстансы Button «Продолжить»/«Пропустить») | — | 67:193 |

> QuestionCard, AnswerOption, Button **Used in:** screens/test-session

## Навигация

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| Navbar | Горизонтальная шапка экрана (собрана из инстанса IconButton) | — | 44:147 |
| Tabs | Переключение между разделами на одном экране (например, темы в Tests, вкладки History/ReviewQueue) | State=active / inactive | 60:158 |
| TabBarItem | Один пункт нижней навигации (иконка + подпись); иконка внутри инстанса подменяется под конкретную вкладку (`swapComponent`) | State=active / inactive | 148:177 |

> Navbar, TabBarItem **Used in:** screens/home

## Фидбэк

| Компонент | Назначение | Варианты | Node ID |
|---|---|---|---|
| InlineAlert | Встроенный (не всплывающий) баннер с иконкой и текстом — предупреждения/подсказки прямо в потоке экрана | Variant=error / warning / info / success × Surface=solid / subtle (8 ячеек) | 419:145 |

> Собран из карточки-подсказки на Camera («Тёрн 2», «Не удалось распознать чётко. Повторите съёмку»). Иконки: exclamation-circle (error), exclamation-triangle (warning), info-circle (info), check-circle (success). Радиус правлен руками пользователем в Figma: было `radius-xl`(24), стало `radius-lg`(16), привязка к переменной сохранена — применено ко всем 8 ячейкам.
> Изначально фон был на 12%-подложке (`bg-*-subtle`), затем на Camera это оказалось нечитаемо поверх фото — перевели на сплошную заливку. Но на обычных поверхностях (RecognitionResult) сплошная заливка избыточно яркая — поэтому добавили измерение `Surface`: **solid** (`bg-error`/`bg-warning`/`bg-info`/`bg-success`, текст `text-on-action`) для контекстов поверх фото/видео; **subtle** (`bg-*-subtle`, текст `text-error`/`text-default`) для обычных экранов. Один компонент, два назначения.
> **Used in:** screens/2b (error, Surface=solid — поверх видоискателя), screens/2c (info, Surface=subtle — подсказка про похожий знак)

| OverlayChip | Полупрозрачная пилюля-подсказка поверх фото/видео (например, поверх видоискателя камеры) | — | 348:131 |

> Фон `text-on-action` при 14% непрозрачности, текст `gray-200`, скругление 999 (полная пилюля).
> **Готча:** `createInstance()` от этого компонента не переносит `opacity` заливки (0.14 у мастера) — новый инстанс получает `opacity:1` (непрозрачный белый), несмотря на то, что цвет остаётся привязан к переменной. Похоже на баг конкретно с paint-level opacity при создании инстансов (см. также аналогичный готча-кейс с `setBoundVariableForPaint` игнорирующим ручной opacity). После `createInstance()` нужно вручную переустановить `chip.fills = [{ ...chip.fills[0], opacity: 0.14 }]`.
> **Used in:** screens/2b (индикатор режима «Авто», подсказка «Наведите на знак»), screens/3a (подписи детекции знаков «Ограничение 60», «Остановка запрещена» — раньше собирались ad-hoc, заменены на реальный инстанс при аудите `screens_import_9`)

| Badge | Статусная метка + категорийный тег | Variant=success / warning / error / info / category-red / category-blue / neutral / accent / white | 354:142 |

> Расширен вариантами `category-red`/`category-blue` вместо отдельного компонента-тега (изначально был отрисован как самостоятельная пилюля на 2c — объединили в Badge, т.к. это тот же паттерн «текст + цветная заливка», просто другое состояние). Status-варианты (success/warning/error/info) — сплошная заливка + белый текст; category-варианты — приглушённая подложка (`bg-category-*-subtle`) + цветной текст, т.к. это категоризация контента, а не статус.
> Расширен ещё раз при импорте `screens_import_9`: `neutral` (`surface-well`/`text-muted` — нейтральный статус-тег, например «Прошло» в LessonRow) и `accent` (`surface-action-primary`/`text-on-action` — акцентный сплошной тег, «Сегодня» в LessonRow, теги повторения в Profile).
> Расширен в третий раз при аудите компонентов: `white` (`surface-default`/`text-default` — нейтральный тег на подложке-карте, например «Любимые темы» в Profile; было 3 ad-hoc копии).
> **Used in:** screens/recognition-result (success — индикатор уверенности распознавания), screens/2c (success — «Распознано точно·98%»; category-red — тег «Знак 2.4 · приоритет»), screens/recognition-result-v2 (4a, success + category-blue), screens/my-lessons (neutral, accent), screens/profile (accent, white)

| FeatureCard | Карточка-раздел на главной: иконка в светлом квадрате (56px) + заголовок + подпись | Variant=IconSide: left \| right | 590:197 |

> Добавлен при аудите компонентов (`screens_import_9`) — было 2 ad-hoc копии на одном экране («Билеты ПДД» иконка слева, «Запись к инструктору» иконка справа), порог «3+» формально не достигнут, но пользователь явно попросил вынести.
> **Used in:** screens/home-v2 (3c, оба варианта)

| Toast | Всплывающее уведомление о результате действия | Variant=success / warning / error / info | 60:149 |
