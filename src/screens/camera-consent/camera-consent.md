# 3h · Запуск камеры · алерт о данных

**Роут:** `/screens/camera-consent`
**Figma:** [ссылка](https://www.figma.com/design/03HBFy4ijiaHZcbkVTeEIU/Pix-Perfct--Tati-R-?node-id=532-414), секция «Design Import — Claude Design v2»

## Из базы (`src/components/`)
- `Button` ×2 (primary «Понятно», secondary «Открыть настройки») — внутри `ConsentSheet`
- `Icon` (camera, shield-check)

## Общие части экрана (`src/screens/shared/`)
- `ViewfinderHeader`, `CaptureBar` — те же, что на 3a (см. его заметку). Здесь `CaptureBar` дополнительно затемнён
  (`opacity: 0.4`) — под сценарий «экран ещё не готов, показываем алерт поверх».

## Локальные доменные блоки (`parts/`)
- `ScanFrame` — рамка-гид (4 угловые скобки со скруглённым внешним углом, видны только 2 смежные стороны) + иконка
  камеры + подпись «Камера запускается».
- `ConsentSheet` — bottom sheet согласия: IconBox + заголовок + текст + 2 кнопки в столбик.

## Раскладка
Scrim (`--overlay-scrim`) — `position: absolute; inset: 0` поверх видоискателя и притушенного `CaptureBar`;
`ConsentSheet` — отдельный `position: absolute; bottom: 0`, поэтому визуально перекрывает нижнюю часть
`CaptureBar`, как и в Figma (там `ConsentSheet` тоже абсолютно позиционирован поверх).

## Mock-контент
Статика из макета: подпись «Камера запускается», текст согласия, лейблы кнопок.

## Навигация (directive_wire, Фаза 1)
Кнопка закрыть (×) — назад по истории. «Понятно» в `ConsentSheet` → `/screens/ar-recognition` (согласие дано →
запускается живой видоискатель). Затвор в `CaptureBar` здесь без `onCapture` — неактивен, камера ещё не готова.
«Открыть настройки» — пока без действия (нет экрана настроек).

## Обновление: иконка ConsentSheet — рамка вместо заливки (только прототип)
Тот же запрос, что и на HeroCta главного экрана (см. `home-extended.md`): `.iconBox` вокруг `shield-check` в
`ConsentSheet` — было `background: var(--surface-well)` (серая заливка). `ScanFrame` (угловые скобки-гид вокруг
иконки камеры в видоискателе) не трогали — там уже был нужный паттерн.

**Уточнение:** первая попытка — сплошная обводка `border: 2px solid var(--text-default)` (как у `DetectionBox`
на 3a) — пользователь попросила не сплошную, а именно угловые скобки, «как ScanFrame на этом же экране». Заменено
на 4 отдельных `span.corner` (12×12px, `border-width` на 2 смежных сторонах + скругление внешнего угла
`radius-sm`) — тот же приём, что у `ScanFrame`, просто уменьшенный под 44px. Цвет скобок — `text-muted` (было
`text-default`, по отдельному запросу пользователя, синхронно с тем же изменением на HeroCta главного экрана).
Только в прототипе, Figma не менялась.
