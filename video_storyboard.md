# Video Storyboard — DRIVER AI (hero-видео: «наведи камеру → получи ответ»)

## Сюжет
Идеи от студента не было — сюжет придуман под продукт, по основному сценарию из `prd.md` (Игорь, основная персона): «вижу знак, значение которого забыл → навожу камеру → мгновенно получаю понятное объяснение». Три кадра — это одна непрерывная последовательность: наведение камеры на реальный знак → момент распознавания → экран с ответом. Простое, прямое движение камеры, без сложной хореографии — ровно то, что реально происходит с продуктом за 3 секунды.

- **Кадр 1 (старт):** рука держит телефон, направленный на реальный уличный знак «Уступите дорогу» — на экране телефона живой видоискатель, рамка распознавания только начинает формироваться вокруг знака.
- **Кадр 2 (середина):** камера приблизилась к телефону — рамка распознавания чётко замкнулась на знаке, на экране появляется лавандовый чип с названием знака — момент самого распознавания.
- **Кадр 3 (финал):** камера чуть отступает и выравнивается — на экране уже открыт экран результата (название знака, карточка штрафа), настоящий знак мягко размыт на фоне позади телефона.

## Переходы
- **Переход A (кадр 1 → кадр 2):** медленный плавный наезд камеры (push-in) на экран телефона; рамка распознавания на экране анимированно стягивается из рыхлой в чёткую, блик на эмали знака резче фокусируется.
- **Переход B (кадр 2 → кадр 3):** камера плавно отъезжает и слегка наклоняется вниз; содержимое экрана телефона плавно сменяется с видоискателя на экран результата (лавандовые теги и красная карточка штрафа проявляются снизу вверх), рука с телефоном чуть расслабляется и опускается.

---

## Часть 1 — Промпт для Сетки 4K (Nano Banana Pro)

**Промпт на английском — скопировать в Nano Banana Pro без изменений:**

```
Generate one single 4K production-quality image, split into a numbered grid of three frames (1, 2, 3), arranged left to right, each frame the same aspect ratio and clearly separated by a thin margin. All three frames show the same scene, same hand, same phone, same real Russian yield road sign ("Уступите дорогу" — inverted red-bordered white triangle sign on a metal pole), same single hard directional light source (low sun) crossing the frame diagonally, same overcast dusk-to-daylight exposure — full visual consistency across all three cells, as if captured seconds apart by the same handheld phone camera.

Shared style across all three frames: documentary-leaning phone-camera photography, handheld proximity, natural mid-range depth of field (subject sharp, background softened but legible, not heavy bokeh). The road sign is matte-to-satin aluminum with reflective enamel coating, visible edge wear and minor scuffs — a real street sign, not a studio prop. The single light source produces one clean specular highlight on the reflective enamel and a long soft cast shadow — no lens flare, no chromatic aberration. Surface carries a faint digital sensor grain in shadow areas and slight edge softness, as if captured mid-scan. The phone's on-screen UI uses a near-black asphalt-dark interface (#161616) with a signature lavender accent color (#A898F5) for highlights, tags and detection elements — no blue anywhere in the UI. Composition in every frame is close and slightly asymmetric, subject pushed to one third rather than centered — no studio product-table angles, no drone/crane perspectives.

Frame 1: Medium shot of a hand holding a smartphone up toward the real yield sign in the background, phone screen facing the viewer and showing a live camera viewfinder with a thin white AR corner-bracket detection frame just beginning to form loosely around the sign's silhouette on screen. The real sign is visible both in the physical background and live on the phone screen.

Frame 2: Camera pushed closer, three-quarter angle tight on the phone itself. On screen, the white AR corner-bracket detection frame is now fully locked — crisp and solid around the sign — and a small lavender (#A898F5) pill-shaped label with the sign's name has just appeared on screen, marking the exact instant of recognition. The specular highlight on the sign is at its sharpest.

Frame 3: Camera has eased back and leveled out, hand relaxed slightly lower, showing the full phone screen clearly. The screen now displays a result UI: the recognized sign's name as a bold heading, a small lavender tag/badge, and below it a light red rounded card showing a fine amount in bold red text. The real yield sign is still visible, softly blurred, in the background behind the phone, tying the physical and digital moment together.

Render at full 4K resolution, production quality, sharp focus on the phone and hand in every frame.
```

**Что это даёт (по-русски, для справки):** одно 4K-изображение с тремя пронумерованными кадрами — рука с телефоном на фоне знака → приближение и момент распознавания (лавандовый чип) → итоговый экран результата (тег + красная карточка штрафа), знак мягко размыт на фоне. Стиль, свет и палитра (асфальтово-чёрный + фирменный лавандовый, без синего) зафиксированы одним текстом, чтобы все три ячейки вышли в едином виде.

---

## Часть 2 — Промпты для image-to-video (Start + End Frame)

### Клип A
**Start = кадр 1, End = кадр 2**

```
Slow, smooth handheld push-in. The camera moves gently closer to the phone screen, tightening the framing. On screen, the white AR corner-bracket detection frame animates from loose and slightly open to a crisp, fully locked outline around the sign. The specular highlight on the sign's reflective enamel sharpens and intensifies as the frame locks. Natural, unhurried motion — no camera shake, no fast cuts, continuous smooth movement throughout.
```

### Клип B
**Start = кадр 2, End = кадр 3**

```
Slow, smooth handheld pull-back combined with a gentle downward tilt. The hand holding the phone eases slightly lower and more relaxed. The phone screen content transitions smoothly from the camera viewfinder with the locked detection frame to the result screen UI — the lavender tag and the red fine card gently rise into view from the bottom of the screen as if settling into place. The real road sign in the background stays softly blurred and steady. Continuous, calm motion — no abrupt cuts.
```
