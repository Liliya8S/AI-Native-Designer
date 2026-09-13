import type { Meta, StoryObj } from '@storybook/react-vite'
import { AnswerOption } from './AnswerOption'

/** Один вариант ответа: буква + текст слева, радиокнопка справа. */
const meta = {
  title: 'Components/AnswerOption',
  component: AnswerOption,
  tags: ['autodocs'],
  args: { state: 'default', letter: 'A', label: 'Водитель синей машины' },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'selected', 'correct', 'incorrect'] },
    letter: { control: 'text' },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof AnswerOption>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <AnswerOption {...args} />
    </div>
  ),
}
export const Selected: Story = {
  args: { state: 'selected', letter: 'B', label: 'Водитель трамвая' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <AnswerOption {...args} />
    </div>
  ),
}
export const Correct: Story = {
  args: { state: 'correct', letter: 'C', label: 'Оба варианта верны' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <AnswerOption {...args} />
    </div>
  ),
}
export const Incorrect: Story = {
  args: { state: 'incorrect', letter: 'D', label: 'Ни один не прав' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <AnswerOption {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      <AnswerOption letter="A" label="Водитель синей машины" />
      <AnswerOption state="selected" letter="B" label="Водитель трамвая" />
      <AnswerOption state="correct" letter="C" label="Оба варианта верны" />
      <AnswerOption state="incorrect" letter="D" label="Ни один не прав" />
    </div>
  ),
}
