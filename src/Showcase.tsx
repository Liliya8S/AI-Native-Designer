import { useState, type ReactNode } from 'react'
import styles from './Showcase.module.css'
import scanGiveWay from './assets/photos/scan-give-way.png'
import scanPedestrian from './assets/photos/scan-pedestrian.png'
import scanPriorityRoad from './assets/photos/scan-priority-road.png'
import {
  Button,
  IconButton,
  Input,
  Card,
  Modal,
  StatCard,
  InfoRow,
  ProgressBar,
  TimeSlotRow,
  LessonRow,
  ListItem,
  TopicNode,
  ScanRow,
  AnswerOption,
  QuestionCard,
  FeatureCard,
  Navbar,
  Tabs,
  TabBarItem,
  InlineAlert,
  OverlayChip,
  Badge,
  Toast,
} from './components'

const semanticSwatches = [
  'surface-default',
  'surface-subtle',
  'surface-action-primary',
  'surface-action-primary-hover',
  'surface-inverse',
  'surface-well',
  'text-default',
  'text-muted',
  'text-on-action',
  'text-error',
  'text-success',
  'border-default',
  'border-strong',
  'border-error',
  'border-focus-ring',
  'border-decorative',
  'bg-success',
  'bg-warning',
  'bg-error',
  'bg-info',
  'bg-success-subtle',
  'bg-warning-subtle',
  'bg-error-subtle',
  'bg-info-subtle',
  'bg-category-red',
  'bg-category-red-subtle',
  'text-category-red',
  'bg-category-blue',
  'bg-category-blue-subtle',
  'text-category-blue',
  'overlay-scrim',
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.sectionTitle} ds-heading-xl`}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}

function Row({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>
}

/** Подпись под конкретным вариантом/состоянием — чтобы не путать демо-контент с названием состояния */
function Labeled({ caption, children }: { caption: string; children: ReactNode }) {
  return (
    <div className={styles.labeled}>
      {children}
      <span className={`${styles.labeledCaption} ds-body-xs`}>{caption}</span>
    </div>
  )
}

export default function Showcase() {
  const [modalOpen, setModalOpen] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className="ds-heading-3xl">Дизайн-система — React-база</h1>
        <p className={`${styles.headerSub} ds-body-sm`}>
          Зеркало ds/foundation.md + ds/components.md. Источник истины — Figma; здесь — тот же набор в коде.
        </p>
      </header>

      <Section title="Палитра">
        <div className={styles.swatchGrid}>
          {semanticSwatches.map((name) => (
            <div key={name} className={styles.swatch}>
              <span className={styles.swatchColor} style={{ background: `var(--${name})` }} />
              <span className={`${styles.swatchName} ds-body-xs`}>{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Типографика">
        <div className={styles.typeScale}>
          <p className="ds-heading-4xl">4xl 48 — Пример текста</p>
          <p className="ds-heading-3xl">3xl 32 — Пример текста</p>
          <p className="ds-heading-2xl">2xl 24 — Пример текста</p>
          <p className="ds-heading-xl">xl 20 — Пример текста</p>
          <p className="ds-heading-lg">lg 18 — Пример текста</p>
          <p className="ds-body-base">base 16 — Пример текста</p>
          <p className="ds-body-sm">sm 14 — Пример текста</p>
          <p className="ds-body-sm-medium">sm Medium 14 — Пример текста</p>
          <p className="ds-body-xs">xs 12 — Пример текста</p>
          <p className="ds-label-xs">Label xs 12 — Пример текста</p>
        </div>
      </Section>

      <Section title="Действия — Button, IconButton">
        <Row>
          <Button>Продолжить</Button>
          <Button variant="secondary">Отмена</Button>
          <Button variant="ghost">Подробнее</Button>
          <Button size="lg">Продолжить</Button>
        </Row>
        <Row>
          <Labeled caption="state=disabled">
            <Button disabled>Продолжить</Button>
          </Labeled>
          <Labeled caption="variant=secondary, state=disabled">
            <Button variant="secondary" disabled>
              Отмена
            </Button>
          </Labeled>
          <Labeled caption="state=loading">
            <Button loading>Продолжить</Button>
          </Labeled>
        </Row>
        <Row>
          <IconButton surface="dark" iconName="setting" />
          <IconButton surface="light" iconName="arrow-left" />
          <span className={styles.darkPad}>
            <IconButton surface="translucent" iconName="times" />
          </span>
        </Row>
      </Section>

      <Section title="Ввод — Input">
        <Row>
          <Labeled caption="type=text, state=default">
            <Input placeholder="Текст" />
          </Labeled>
          <Labeled caption="type=search, state=default">
            <Input type="search" placeholder="Поиск" />
          </Labeled>
        </Row>
        <Row>
          <Labeled caption="state=error">
            <Input placeholder="Ошибка" state="error" defaultValue="Неверное значение" />
          </Labeled>
          <Labeled caption="state=filled (уже введён текст)">
            <Input placeholder="Заполнено" state="filled" defaultValue="Значение" />
          </Labeled>
          <Labeled caption="state=focus">
            <Input placeholder="В фокусе" state="focus" />
          </Labeled>
        </Row>
      </Section>

      <Section title="Контейнеры — Card, Modal">
        <div className={styles.card} style={{ width: 320 }}>
          <Card title="Заголовок карточки">Краткий текст описания состояния или сущности.</Card>
        </div>
        <div>
          <Button onClick={() => setModalOpen(true)}>Открыть Modal</Button>
        </div>
        <Modal
          open={modalOpen}
          title="Заголовок модалки"
          onClose={() => setModalOpen(false)}
          onPrimary={() => setModalOpen(false)}
          onSecondary={() => setModalOpen(false)}
        >
          Текст модального окна с описанием действия, которое предстоит подтвердить.
        </Modal>
      </Section>

      <Section title="Данные">
        <Row>
          <StatCard variant="neutral" value="4" label="темы в повторении" />
          <StatCard variant="blue" value="14" label="вопросов по теме" />
          <StatCard variant="success" value="86%" label="верных в билетах" />
        </Row>

        <InfoRow label="14 вопросов по теме" />
        <InfoRow label="14 вопросов по теме" trailing trailingLabel="Пройти" />

        <div style={{ maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ProgressBar variant="accent" label="Вождение" percent={21} />
          <ProgressBar variant="category-blue" label="Билеты ПДД" percent={48} />
        </div>

        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <TimeSlotRow state="default" day="16" weekday="Пн" time="09:00 – 10:30" meta="Светлана В. · механика" />
          <TimeSlotRow state="selected" day="16" weekday="Пн" time="11:00 – 12:30" meta="Дмитрий К. · автомат" />
          <TimeSlotRow state="disabled" day="16" weekday="Пн" time="14:00 – 15:30" meta="Занято" />
        </div>

        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <LessonRow status="past" initials="СВ" time="09:00 – 10:30" meta="Светлана В. · механика" />
          <LessonRow status="today" initials="ДК" time="11:00 – 12:30" meta="Дмитрий К. · автомат" />
          <LessonRow status="upcoming" initials="ИГ" time="17:00 – 18:30" meta="Игорь Г. · механика" />
        </div>

        <div style={{ maxWidth: 320 }}>
          <ListItem icon="history-alt" label="История вождений" />
          <ListItem icon="setting" label="Настройки" />
          <ListItem icon="sign-out-alt" label="Выйти" style2="destructive" />
        </div>

        <Row>
          <TopicNode state="locked" label="Перекрёстки" />
          <TopicNode state="available" label="Парковка" />
          <TopicNode state="completed" label="Знаки приоритета" />
        </Row>

        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ScanRow category="red" title="Уступите дорогу" meta="Сегодня, 14:20" thumbSrc={scanGiveWay} />
          <ScanRow category="blue" title="Пешеходный переход" meta="Вчера, 09:10" thumbSrc={scanPedestrian} />
          <ScanRow category="neutral" title="Главная дорога" meta="Вчера, 13:08" thumbSrc={scanPriorityRoad} />
        </div>

        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <AnswerOption letter="A" label="Водитель синей машины" />
          <AnswerOption letter="B" label="Водитель трамвая" state="selected" />
          <AnswerOption letter="C" label="Оба варианта верны" state="correct" />
          <AnswerOption letter="D" label="Ни один не прав" state="incorrect" />
        </div>

        <div style={{ maxWidth: 400 }}>
          <QuestionCard
            question="Кто должен уступить дорогу на перекрёстке?"
            answers={[
              { letter: 'A', label: 'Водитель синей машины' },
              { letter: 'B', label: 'Водитель трамвая' },
              { letter: 'C', label: 'Водитель красной машины' },
            ]}
          />
        </div>

        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <FeatureCard iconSide="left" icon="clipboard-notes" title="Билеты ПДД" subtitle="15 тем ПДД, работает офлайн" />
          <FeatureCard
            iconSide="right"
            icon="calendar-alt"
            title="Запись к инструктору"
            subtitle="Свободных слотов на неделю: 12"
          />
        </div>
      </Section>

      <Section title="Навигация — Navbar, Tabs, TabBarItem">
        <div className={styles.card} style={{ width: 320, padding: 0 }}>
          <Navbar title="ПДД Ассистент" />
        </div>
        <Tabs items={['Билеты', 'История']} activeIndex={tabIndex} onChange={setTabIndex} />
        <Row>
          <TabBarItem active icon="home" label="Главная" />
          <TabBarItem icon="clipboard-notes" label="Билеты" />
          <TabBarItem icon="calendar-alt" label="Занятия" />
          <TabBarItem icon="user" label="Профиль" />
        </Row>
      </Section>

      <Section title="Фидбэк — InlineAlert, OverlayChip, Badge, Toast">
        <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <InlineAlert variant="info" surface="subtle">
            Наведите камеру ближе к знаку
          </InlineAlert>
          <InlineAlert variant="error" surface="solid">
            Не удалось распознать чётко. Повторите съёмку
          </InlineAlert>
        </div>

        <div className={styles.darkPad}>
          <OverlayChip>Наведите на знак</OverlayChip>
        </div>

        <Row>
          <Badge variant="success">Готово</Badge>
          <Badge variant="warning">Внимание</Badge>
          <Badge variant="error">Ошибка</Badge>
          <Badge variant="info">Инфо</Badge>
          <Badge variant="category-red">Знак 1.1</Badge>
          <Badge variant="category-blue">Знак 2.4</Badge>
          <Badge variant="neutral">Прошло</Badge>
          <Badge variant="accent">Сегодня</Badge>
          <Badge variant="white">Приоритет · 96%</Badge>
        </Row>

        <Row>
          <Toast variant="success">Сохранено</Toast>
          <Toast variant="warning">Проверьте данные</Toast>
          <Toast variant="error">Ошибка сети</Toast>
          <Toast variant="info">Синхронизация...</Toast>
        </Row>
      </Section>
    </div>
  )
}
