# Notion Publishing Instructions

Кратко: чтобы опубликовать `prd.md` как структурированную страницу в Notion через API, понадобится интеграция (integration token) и ID родительской страницы. Ниже — инструкции и пример запроса.

Требования
- Notion integration token с правами `pages` и `databases`.
- Parent page id (ID страницы или workspace, куда создавать PRD).

Простой curl‑пример (замените переменные):

```bash
NOTION_TOKEN="secret_xxx"
PARENT_PAGE_ID="your_parent_page_id"

curl https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{
    "parent": { "page_id": "'"$PARENT_PAGE_ID"'" },
    "properties": {
      "title": [
        { "type": "text", "text": { "content": "AI Native Driving Assistant — PRD v1.0" } }
      ]
    },
    "children": [
      { "object": "block", "type": "heading_2", "heading_2": { "text": [{ "type": "text", "text": { "content": "Executive Summary" } }] } },
      { "object": "block", "type": "paragraph", "paragraph": { "text": [{ "type": "text", "text": { "content": "(Вставьте содержимое Executive Summary из prd.md)" } }] } }
    ]
  }'
```

Как я могу помочь дальше
- Я могу выполнить публикацию за вас, если вы предоставите integration token и parent page id (рекомендую временно создать интеграцию и делегировать токен). При этом я создам следующую структуру:
  - Главная страница PRD (иконка 📋, заголовок "AI Native Driving Assistant — PRD v1.0").
  - Sections H2: Executive Summary, Goals & Metrics, Audience, Competitive Landscape, MVP Scope, User Stories, NFRs, Risks, Roadmap.
  - База данных "User Stories" с колонками: Title, Priority, Persona, Status — заполню строками из раздела User Stories.
  - База данных "Feature Roadmap" с колонками: Feature, Version, Priority, Description — заполню из prioritization.md.

Если вы не хотите делиться токеном, я могу:
- Подготовить JSON‑payload (Notion blocks) для ручного импорта/вставки — файл сохранён локально и готов.

Где файлы:
- PRD: [prd.md](prd.md)
- Инструкции и пример: [notion_publish_instructions.md](notion_publish_instructions.md)

Примеры полей/типов баз данных и тонкости Notion API я добавлю по запросу.

Безопасность: не публикуйте секреты в публичные каналы; лучше отправьте токен в приватном сообщении здесь, или создайте временную интеграцию и удалите её после публикации.

---
