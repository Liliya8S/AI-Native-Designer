import type { Meta, StoryObj } from '@storybook/react-vite'
import { TopicNode } from './TopicNode'

/** Карточка темы в сетке каталога Tests (в духе Duolingo). */
const meta = {
  title: 'Components/TopicNode',
  component: TopicNode,
  tags: ['autodocs'],
  args: { state: 'available', label: 'Парковка' },
  argTypes: {
    state: { control: 'inline-radio', options: ['locked', 'available', 'completed'] },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TopicNode>

export default meta
type Story = StoryObj<typeof meta>

export const Locked: Story = { args: { state: 'locked', label: 'Перекрёстки' } }
export const Available: Story = {}
export const Completed: Story = { args: { state: 'completed', label: 'Знаки приоритета' } }

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <TopicNode state="locked" label="Перекрёстки" />
      <TopicNode state="available" label="Парковка" />
      <TopicNode state="completed" label="Знаки приоритета" />
    </div>
  ),
}
