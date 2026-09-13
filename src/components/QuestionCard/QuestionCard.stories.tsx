import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuestionCard } from './QuestionCard'

/** Карточка вопроса теста целиком (фото + вопрос + варианты + кнопки). */
const meta = {
  title: 'Components/QuestionCard',
  component: QuestionCard,
  tags: ['autodocs'],
  args: {
    question: 'Кто должен уступить дорогу на перекрёстке?',
    answers: [
      { letter: 'A', label: 'Водитель синей машины' },
      { letter: 'B', label: 'Водитель трамвая' },
      { letter: 'C', label: 'Водитель красной машины' },
    ],
    primaryLabel: 'Продолжить',
    secondaryLabel: 'Пропустить',
  },
  argTypes: {
    question: { control: 'text' },
    answers: { control: 'object' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof QuestionCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <QuestionCard {...args} />
    </div>
  ),
}

/** С состояниями ответов (одна из четырёх — верный/неверный выбор). */
export const WithAnsweredState: Story = {
  args: {
    answers: [
      { letter: 'A', label: 'Водитель синей машины', state: 'selected' },
      { letter: 'B', label: 'Водитель трамвая', state: 'correct' },
      { letter: 'C', label: 'Водитель красной машины' },
    ],
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <QuestionCard {...args} />
    </div>
  ),
}

/** Крайний случай: неверно выбран ответ — верный вариант всё равно подсвечивается. */
export const WithIncorrectSelection: Story = {
  args: {
    answers: [
      { letter: 'A', label: 'Водитель синей машины', state: 'incorrect' },
      { letter: 'B', label: 'Водитель трамвая', state: 'correct' },
      { letter: 'C', label: 'Водитель красной машины' },
    ],
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <QuestionCard {...args} />
    </div>
  ),
}

/** Крайний случай: длинный вопрос и длинные варианты ответов — карточка не ломает layout. */
export const LongContent: Story = {
  args: {
    question:
      'В каком порядке транспортные средства должны проезжать нерегулируемый перекрёсток равнозначных дорог при одновременном подъезде нескольких автомобилей с трёх направлений?',
    answers: [
      { letter: 'A', label: 'Первым едет тот, у кого нет помехи справа, остальные пропускают по очереди' },
      { letter: 'B', label: 'Первым едет водитель трамвая, независимо от направления движения' },
      { letter: 'C', label: 'Все выезжают одновременно, руководствуясь сигналами регулировщика' },
    ],
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <QuestionCard {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <QuestionCard {...args} />
    </div>
  ),
}
