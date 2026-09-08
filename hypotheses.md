# Гипотезы и план A/B‑экспериментов

Ниже — набор тестируемых гипотез, метрики успеха, guardrails и краткое описание A/B‑эксперимента. Гипотезы сформированы на основе `brief.md`, `competitive_analysis_final.md` и `audit/audit_report.md`.

## 1. Quick‑start CTA увеличит ранний ретеншн
- Гипотеза: если у главного экрана будет явно видимый единичный CTA «Начать тест» (1‑тап), то D1 вырастет.
- Primary metric: D1 (коэффициент возврата на день 1).
- Target uplift: +5–8 percentage points (pp).
- Guardrail: не ухудшить конверсию в установку → вход (installs → first open) и не увеличить отказы onboarding >2%.
- A/B design: A = текущий главный экран; B = главный экран с большим ярким CTA (одно действие до старта теста). Продолжительность: 2–4 недели или ~N=2k–5k новых пользователей на вариант.

## 2. «Добавить в повторение» в разборе ответа повышает удержание
- Гипотеза: кнопка `В повторение` прямо в разборе ответа увеличит частоту повторов и D7.
- Primary metric: share of users who add ≥1 item to review within first week; Secondary: D7.
- Target uplift: +12% в action rate → D7 +2–4pp.
- Guardrail: не ухудшить completion rate текущего билета.
- A/B design: A = разбор без кнопки; B = разбор с заметной кнопкой `В повторение`. Тест: 3–6 недель, N min 1k/arm (или до стат. значимости).

## 3. On‑device recognition (speed) увеличит использование photo‑assistant
- Гипотеза: снижение latency распознавания до p95 <3s (on‑device) увеличит частоту использования photo‑assistant.
- Primary metric: photo‑assistant usage rate (фото/сессия) и удержание сессий с фото (core loop completion).
- Target uplift: +15% usage; retention uplift D7 +3pp (в когортах, использующих фото).
- Guardrail: размер APK/IPA и performance impact (memory/CPU) не должны превышать целевых лимитов.
- A/B design: инженерный A/B: A = cloud processing (или slower path); B = on‑device model + show speed indicator. Для быстрой валидации можно сначала A/B тестировать messaging: «Распознавание происходит на устройстве» vs control. Тест: 4–8 недель; requires instrumentation of latency per request.

## 4. Messaging «On‑device / Private» повышает доверие к photo‑assistant
- Гипотеза: явный значок/лейбл «Обработка на устройстве — фото не покидают телефон» увеличит использование и уменьшит отказ от фото‑функции.
- Primary metric: photo opt‑in rate (share of users who allow/use camera feature on first exposure).
- Target uplift: +8–12% opt‑in.
- Guardrail: не снизить installs → first open conversion.
- A/B design: A = no privacy badge; B = badge + short tooltip. Duration 2–4 weeks.

## 5. Offline‑first fallback увеличит использование в низкой сети и удержание
- Гипотеза: если photo‑assistant поддерживает offline DB + graceful cloud fallback, пользователи в плохих сетях будут чаще использовать фичу и дольше удерживаться.
- Primary metric: photo usage rate in low‑connectivity sessions; Secondary: retention (D7) for low‑connectivity cohort.
- Target uplift: +10% usage in low‑connectivity cohort.
- Guardrail: не увеличивать error rate (false negatives) более чем на 5%.
- A/B design: A = current behaviour; B = offline‑first behavior with visible fallback status. Segment by network type; test duration 4–8 weeks.

## 6. Gamification (daily streaks) улучшит D7/D30
- Гипотеза: показ ежедневных стриков и простого вознаграждения (бейдж) увеличит возвращаемость на 7/30 дней.
- Primary metric: D7, D30; Secondary: daily active rate (DAU/MAU).
- Target uplift: D7 +3–5pp, D30 +2–3pp.
- Guardrail: не ухудшить onboarding completion; не повысить churn из‑за навязчивости.
- A/B design: A = нет стриков; B = показывать стрик + уведомления push (opt‑in). Consider factorial test to separate UI vs push effects. Duration: 6–8 weeks.

## 7. B2B — Instructor trial + class dashboard увеличит B2B signups
- Гипотеза: предложив специальный trial и простую «создать класс» flow, инструкторы будут регистрироваться и пробовать продукт для студентов.
- Primary metric: number of instructor trial signups; Secondary: conversion to paid B2B within 90 days.
- Target uplift: +30% trial signups from landing page traffic.
- Guardrail: support load and onboarding manual effort manageable.
- A/B design: A = generic signup; B = instructor‑specific landing + CTAs + CSV import demo. Run as funnel experiment on landing page and outreach campaign.

---

Notes on powering experiments
- Минимальный рекомендуемый sample: 1k–2k пользователей на вариант для базовых тестов (зависит от baseline rate и желаемой detectable uplift). Для ретеншн‑метрик — тесты должны длиться не меньше 14–28 дней, чтобы зафиксировать D7/D30 эффекты.
- Инструменты: аналитика событий (events: `first_open`, `start_test`, `photo_taken`, `add_to_review`, `streak_started`, `instructor_trial`) + ability to cohort by source/device/network.
- Приоритеты: начать с гипотез 1 и 2 (низкие усилия, быстрый feedback), затем 4 (messaging) и 6 (gamification), 3/5/7 — require engineering/partner work.

Если нужно, перенесу гипотезы в табличный формат CSV и добавлю пример шаблона A/B‑отчёта для команды. 

## Гипотезы из интервью с Игорем (Persona 2)
Ниже — гипотезы, прямо вытекающие из разговора с Игорем; все они проверяют поведение в дороге и hands‑free сценарии.

### 8. Confidence indicator повышает доверие и уменьшает отказ от photo‑assistant
- Гипотеза: показ явного индикатора уверенности модели (High/Medium/Low) и подсказки «повторите съёмку» снизит долю отказов после первого скана и повысит retry→success rate.
- Primary metric: отказ после первого скана (first_scan_abort_rate); Secondary: retry→success conversion.
- Target uplift: уменьшение отказов на 10–15%; retry→success +20%.
- Guardrail: не перегрузить UI и не снизить photos/user.
- A/B design: A = текущая карточка; B = карточка с цветовым индикатором и текстовой подсказкой/кнопкой `Повторить`.

### 9. Voice/TTS сводка увеличит hands‑free использование в дороге
- Гипотеза: автоматическая голосовая сводка (1–2 предложения) при распознавании увеличит использование photo‑assistant в режиме в‑машине (sessions with photo while driving).
- Primary metric: photo usage rate while speed>threshold or in‑car sessions; Secondary: photos/user and D1 for car‑users.
- Target uplift: +15% usage in car sessions.
- Guardrail: не включать голос без opt‑in; не повышать количество ложных triggers.
- A/B design: A = visual only; B = visual + TTS (opt‑in prompt on first use). Segment by device motion/drive detection.

### 10. Показ штрафа кратко в карточке повышает ценность и снижает резервацию
- Гипотеза: добавление 1–2 строк о возможном штрафе и кратких условиях повысит perceived value карточки и увеличит частоту сохранений/поделений карточки.
- Primary metric: save/share rate per card; Secondary: session length after card view.
- Target uplift: +8–12% save/share.
- Guardrail: не создавать юридически неверную информацию — добавлять ссылку «Подробнее» и disclaimer.
- A/B design: A = карточка без штрафа; B = карточка с краткой строкой о штрафе + `Подробнее`.

### 11. История сканов + экспорт увеличит взаимодействие с инструктором (B2B funnel)
- Гипотеза: возможность экспортировать историю сканов (CSV/PDF) и помечать элементы для разбора увеличит количество запросов к инструкторам и вероятность B2B‑пилотов.
- Primary metric: export requests / instructor referrals; Secondary: conversion to trial for instructors.
- Target uplift: +25% trial requests из экспортов/shared reports.
- Guardrail: экспорт должен быть простым и приватным (только по запросу пользователя).
- A/B design: A = нет экспорта; B = кнопка `Экспорт/Поделиться` в истории + шаблон письма. Track downstream signups.

### 12. Incident logger (локальный) повышает доверие к аварийному workflow
- Гипотеза: реализация локального «Incident logger» (сохранение фото/логи на устройстве + ручная отправка) увеличит частоту использования этой функции и доверие, по сравнению с попыткой автоматической отправки данных.
- Primary metric: usage rate of incident logging; Secondary: share/send after logging.
- Target uplift: +20% adoption of incident logging vs baseline auto‑send attempt.
- Guardrail: не отправлять личные данные без подтверждения; минимизировать accidental sends.
- A/B design: A = prompt автоматической отправки после создания отчёта; B = локальное сохранение + кнопка `Отправить` (manual confirm). Measure opt‑in to sending.

### 13. Микро‑темы и «Освежить перед поездкой» лучше чем полный курс для удержания
- Гипотеза: пользователи, предложенные 3–5 кратких тематических модулей перед поездкой, будут чаще возвращаться, чем пользователи предложенные пройти полный курс.
- Primary metric: D1/D7 for cohorts receiving micro‑playlist vs full course suggestion.
- Target uplift: D1 +5–7pp for micro‑playlist cohort.
- Guardrail: не снижать completion rate у тех, кто готов к полному курсу.
- A/B design: A = предложение пройти полный курс; B = предложение «Освежить перед поездкой» (3–5 мини‑тем). Run for users with low recent activity.

