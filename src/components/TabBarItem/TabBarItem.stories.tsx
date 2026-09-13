import type { Meta, StoryObj } from '@storybook/react-vite'
import { TabBarItem } from './TabBarItem'

/** Один пункт нижней навигации (иконка + подпись). */
const meta = {
  title: 'Components/TabBarItem',
  component: TabBarItem,
  tags: ['autodocs'],
  args: { active: false, label: 'Главная' },
  argTypes: {
    active: { control: 'boolean' },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TabBarItem>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {}
export const Active: Story = { args: { active: true } }

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <TabBarItem active label="Главная" />
      <TabBarItem label="Билеты" />
      <TabBarItem label="Занятия" />
      <TabBarItem label="Профиль" />
    </div>
  ),
}
