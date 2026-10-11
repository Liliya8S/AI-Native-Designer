import type { Meta, StoryObj } from '@storybook/react-vite'
import { ICON_NAMES } from '../Icon'
import { FeatureCard } from './FeatureCard'

/** Карточка «иконка + заголовок + подзаголовок», иконка слева или справа. */
const meta = {
  title: 'Components/FeatureCard',
  component: FeatureCard,
  tags: ['autodocs'],
  args: {
    iconSide: 'left',
    icon: 'clipboard-notes',
    title: 'Билеты ПДД',
    subtitle: '40 официальных билетов 2024 года',
  },
  argTypes: {
    iconSide: { control: 'inline-radio', options: ['left', 'right'] },
    icon: { control: 'select', options: ICON_NAMES },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof FeatureCard>

export default meta
type Story = StoryObj<typeof meta>

export const IconLeft: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <FeatureCard {...args} />
    </div>
  ),
}
export const IconRight: Story = {
  args: { iconSide: 'right', icon: 'calendar-alt', title: 'Экзамен ГИБДД', subtitle: 'Симуляция реального экзамена' },
  render: (args) => (
    <div style={{ width: 320 }}>
      <FeatureCard {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}>
      <FeatureCard iconSide="left" icon="clipboard-notes" title="Билеты ПДД" subtitle="40 официальных билетов 2024 года" />
      <FeatureCard iconSide="right" icon="calendar-alt" title="Экзамен ГИБДД" subtitle="Симуляция реального экзамена" />
    </div>
  ),
}
