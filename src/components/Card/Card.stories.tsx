import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

/** Контейнер для заголовка и краткого текста. */
const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Билеты ПДД',
    children: '15 тем ПДД, работает офлайн — можно проходить без интернета в дороге.',
  },
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Card {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 320 }}>
      <Card title="Билеты ПДД">15 тем ПДД, работает офлайн.</Card>
    </div>
  ),
}
