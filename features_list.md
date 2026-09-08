# Features list — полный набор фич и требований

Каждая фича: Название / Краткое описание / Источник / Критичность для персоны

1. Билеты и тесты (offline)
- Описание: Полный набор официальных билетов ПДД с оффлайн‑доступом и адаптивными тестами.
- Источник: brief.md, competitive_analysis_final.md
- Критична для: Persona 1 (Алина), Persona 3 (Ольга)

2. Photo‑assistant (распознавание знаков)
- Описание: Камерный режим для распознавания знаков по фото, возвращает карточку с описанием.
- Источник: brief.md, personas.md, interview_igor.md
- Критична для: Persona 2 (Игорь)

3. On‑device ML (TFLite/CoreML) + offline DB
- Описание: On‑device модель и локальная база знаков для скорости и приватности.
- Источник: brief.md, competitive_analysis_final.md, hypotheses.md
- Критична для: Persona 2, Persona 1

4. Voice/TTS краткая сводка (1–2 предложения)
- Описание: Голосовой ответ при распознавании для hands‑free использования.
- Источник: brief.md, personas.md, interview_igor.md
- Критична для: Persona 2

5. Confidence indicator + retry подсказка
- Описание: Пороговые метки уверенности модели (высокая/средняя/низкая) и подсказки «повторите съёмку».
- Источник: interview_igor.md, audit/audit_report.md
- Критична для: Persona 2

6. «Добавить в повторение» / Карточки повторения
- Описание: Сохранение ошибки/знака в персональную очередь для повторения и тренировки.
- Источник: personas.md, hypotheses.md
- Критична для: Persona 1, Persona 3

7. История сканов (последние 5 / журнал инцидентов)
- Описание: Локальная история сканов с возможностью пометок и экспорта.
- Источник: interview_igor.md, personas.md
- Критична для: Persona 2, Persona 3

8. Privacy badge / messaging (on‑device label)
- Описание: Явная индикация, что фото обрабатываются на устройстве и не отправляются без подтверждения.
- Источник: brief.md, interview_igor.md
- Критична для: Persona 2

9. Offline‑first fallback и cloud fallback
- Описание: При отсутствии сети приложение работает локально и при необходимости переключается на облако.
- Источник: brief.md, competitive_analysis_final.md
- Критична для: Persona 2

10. Мини‑чат‑ассистент / FAQ (offline cache)
- Описание: Быстрые ответы на вопросы ПДД, локальная база частых вопросов; онлайн LLM как расширение.
- Источник: brief.md, competitive_analysis_final.md
- Критична для: Persona 1, Persona 2

11. Gamification (streaks, бейджи, ежедневные задания)
- Описание: Механики для удержания: стрики, бейджи, лидерборды (анонимизировано).
- Источник: competitor_ux_patterns.md, hypotheses.md
- Критична для: Persona 1

12. Протокол аварии (Accident mode)
- Описание: Режим с голосовыми шагами, автоматической отправкой локации, шаблонами фото и логированием инцидента.
- Источник: interview_igor.md
- Критична для: Persona 2

13. Видео‑анализ / разборы (премиум)
- Описание: Загрузка короткого видео и автоматический разбор ситуаций/ошибок.
- Источник: brief.md, competitive_analysis_final.md
- Критична для: Persona 1 (secondary), Persona 3 (для демонстраций)

14. Map hotspots / локальные предупреждения
- Описание: Карта с горячими точками (аварии, штрафы) и локальными рекомендациями.
- Источник: competitive_analysis_final.md
- Критична для: Persona 2

15. Widget / quick shortcut / wake‑word
- Описание: Быстрый доступ к фото‑ассистенту через виджет, системный shortcut или wake‑word.
- Источник: personas.md, interview_igor.md
- Критична для: Persona 2

16. Push / reminders / «Освежить перед поездкой»
- Описание: Уведомления про daily tasks, напоминания перед поездкой с подборкой микро‑тем.
- Источник: personas.md, hypotheses.md
- Критична для: Persona 1

17. Экспорт/импорт и класс‑панель для инструкторов (B2B)
- Описание: CSV/PDF экспорт истории, создание классов, аналитика ошибок по группе.
- Источник: personas.md, competitive_analysis_final.md
- Критична для: Persona 3

18. Monetization flows (free/premium, trial, IAP)
- Описание: Разграничение базового и премиум контента, пробный период, подписка.
- Источник: competitive_analysis_final.md
- Критична для: Business

19. Onboarding / first‑time quick tour
- Описание: Короткий интерактивный онбординг 3–5 шагов с quick‑wins (первый scan). 
- Источник: competitor_ux_patterns.md, brief.md
- Критична для: Persona 1, Persona 2

20. Analytics events / instrumentation
- Описание: События: `start_test`, `photo_taken`, `add_to_review`, `accident_reported` и когортные метрики.
- Источник: hypotheses.md
- Критична для: Product/Analytics
