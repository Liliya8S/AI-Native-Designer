# MoSCoW приоритизация фич

## Must Have
- Билеты и тесты (offline) — core JTBD для экзаменующихся.
- Photo‑assistant (распознавание знаков) — primary JTBD для Игоря.
- On‑device ML + offline DB — скорость и privacy (ключевой дифференциатор).
- Voice/TTS краткая сводка — hands‑free использование.
- Confidence indicator + retry подсказка — доверие и UX для распознавания.
- «Добавить в повторение» / карточки повторения — retention loop.
- История сканов (последние 5) — рабочий кейс для инструктора/пользователя.
- Privacy badge / messaging — trust & conversion.
- Onboarding / first‑time quick tour — reduce D1 churn.
- Analytics events / instrumentation — нужно для A/B и метрик.

## Should Have
- Offline‑first fallback и cloud fallback — важно, но можно запустить с базовым offline.
- Widget / quick shortcut / wake‑word — повысит удобство, требует больше engineering.
- Push / reminders / «Освежить перед поездкой» — retention booster.
- Monetization flows (basic premium flows) — нельзя запускать без стратегии, но нужно скоро.
- Accident mode (basic) — важная safety‑фича, но может быть реализована позже как v1.1.

## Could Have
- Gamification (streaks, badges) — полезно для retention, но вторично.
- History export / instructor dashboard (B2B) — требует B2B sales/ops.
- Map hotspots / локальные предупреждения — полезно, но дорогая интеграция.
- Video analysis / разборы (premium) — долгосрочная roadmap.

## Won't Have (now)
- AR overlays / in‑drive AR — запрещать/откладывать по безопасности и юридике.
- Full LLM chat assistant (online advanced) — resource heavy; сделать позже.
- Complex social features / leaderboards — отложить до подтверждения retention uplift.

Примечание: критерии для Must Have — напрямую связаны с JTBD primary‑персоны (Persona 2), table stakes и минимально необходимы для MVP.
