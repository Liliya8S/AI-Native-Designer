import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from './StatCard'

/** Карточка метрики: крупное число + подпись, на цветной подложке. */
const meta = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: { variant: 'neutral', value: '4', label: 'темы в повторении' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['neutral', 'red', 'blue', 'success'] },
    value: { control: 'text' },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Red: Story = { args: { variant: 'red', value: '3', label: 'ошибки в теме' } }
export const Blue: Story = { args: { variant: 'blue', value: '14', label: 'вопросов по теме' } }
/** Позитивная метрика (% успеха), text-success. */
export const Success: Story = { args: { variant: 'success', value: '86%', label: 'верных в билетах' } }

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <StatCard variant="neutral" value="4" label="темы в повторении" />
      <StatCard variant="red" value="3" label="ошибки в теме" />
      <StatCard variant="blue" value="14" label="вопросов по теме" />
      <StatCard variant="success" value="86%" label="верных в билетах" />
    </div>
  ),
}
