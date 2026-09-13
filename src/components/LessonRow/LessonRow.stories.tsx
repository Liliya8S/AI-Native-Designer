import type { Meta, StoryObj } from '@storybook/react-vite'
import { LessonRow } from './LessonRow'

/** Строка занятия: аватар-инициалы + время/мастер + статус (Badge/chevron). */
const meta = {
  title: 'Components/LessonRow',
  component: LessonRow,
  tags: ['autodocs'],
  args: { status: 'upcoming', initials: 'ИГ', time: '17:00 – 18:30', meta: 'Игорь Г. · механика' },
  argTypes: {
    status: { control: 'inline-radio', options: ['past', 'today', 'upcoming'] },
    initials: { control: 'text' },
    time: { control: 'text' },
    meta: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof LessonRow>

export default meta
type Story = StoryObj<typeof meta>

export const Past: Story = {
  args: { status: 'past', initials: 'СВ', time: '09:00 – 10:30', meta: 'Светлана В. · механика' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <LessonRow {...args} />
    </div>
  ),
}
export const Today: Story = {
  args: { status: 'today', initials: 'ДК', time: '11:00 – 12:30', meta: 'Дмитрий К. · автомат' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <LessonRow {...args} />
    </div>
  ),
}
export const Upcoming: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <LessonRow {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      <LessonRow status="past" initials="СВ" time="09:00 – 10:30" meta="Светлана В. · механика" />
      <LessonRow status="today" initials="ДК" time="11:00 – 12:30" meta="Дмитрий К. · автомат" />
      <LessonRow status="upcoming" initials="ИГ" time="17:00 – 18:30" meta="Игорь Г. · механика" />
    </div>
  ),
}
