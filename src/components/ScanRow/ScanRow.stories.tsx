import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScanRow } from './ScanRow'

/** Строка одного скана в списке (Home → RecentScans, History). */
const meta = {
  title: 'Components/ScanRow',
  component: ScanRow,
  tags: ['autodocs'],
  args: { category: 'neutral', title: 'Уступите дорогу', meta: 'Сегодня, 14:20' },
  argTypes: {
    category: { control: 'inline-radio', options: ['neutral', 'red', 'blue'] },
    title: { control: 'text' },
    meta: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScanRow>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}
export const Red: Story = {
  args: { category: 'red', title: 'Знак 2.4 · Приоритет', meta: 'Вчера, 09:10' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}
export const Blue: Story = {
  args: { category: 'blue', title: 'Пешеходный переход', meta: 'Вчера, 13:08' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      <ScanRow category="neutral" title="Уступите дорогу" meta="Сегодня, 14:20" />
      <ScanRow category="red" title="Знак 2.4 · Приоритет" meta="Вчера, 09:10" />
      <ScanRow category="blue" title="Пешеходный переход" meta="Вчера, 13:08" />
    </div>
  ),
}
