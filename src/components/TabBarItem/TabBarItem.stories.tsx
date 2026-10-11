import type { Meta, StoryObj } from '@storybook/react-vite'
import { ICON_NAMES } from '../Icon'
import { TabBarItem } from './TabBarItem'

/** Один пункт нижней навигации (иконка + подпись). */
const meta = {
  title: 'Components/TabBarItem',
  component: TabBarItem,
  tags: ['autodocs'],
  args: { active: false, icon: 'home', label: 'Главная' },
  argTypes: {
    active: { control: 'boolean' },
    icon: { control: 'select', options: ICON_NAMES },
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
      <TabBarItem active icon="home" label="Главная" />
      <TabBarItem icon="clipboard-notes" label="Билеты" />
      <TabBarItem icon="calendar-alt" label="Занятия" />
      <TabBarItem icon="user" label="Профиль" />
    </div>
  ),
}
