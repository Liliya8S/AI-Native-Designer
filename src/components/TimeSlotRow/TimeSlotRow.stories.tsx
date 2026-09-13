import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimeSlotRow } from './TimeSlotRow'

/** Строка слота записи к инструктору: DateBox + время/мастер + статус-индикатор. */
const meta = {
  title: 'Components/TimeSlotRow',
  component: TimeSlotRow,
  tags: ['autodocs'],
  args: {
    state: 'default',
    day: '16',
    weekday: 'Пн',
    time: '09:00 – 10:30',
    meta: 'Светлана В. · механика',
  },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'selected', 'disabled'] },
    day: { control: 'text' },
    weekday: { control: 'text' },
    time: { control: 'text' },
    meta: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof TimeSlotRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <TimeSlotRow {...args} />
    </div>
  ),
}
export const Selected: Story = {
  args: { state: 'selected', time: '11:00 – 12:30', meta: 'Дмитрий К. · автомат' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <TimeSlotRow {...args} />
    </div>
  ),
}
export const Disabled: Story = {
  args: { state: 'disabled', time: '14:00 – 15:30', meta: 'Занято' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <TimeSlotRow {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      <TimeSlotRow state="default" day="16" weekday="Пн" time="09:00 – 10:30" meta="Светлана В. · механика" />
      <TimeSlotRow state="selected" day="16" weekday="Пн" time="11:00 – 12:30" meta="Дмитрий К. · автомат" />
      <TimeSlotRow state="disabled" day="16" weekday="Пн" time="14:00 – 15:30" meta="Занято" />
    </div>
  ),
}
