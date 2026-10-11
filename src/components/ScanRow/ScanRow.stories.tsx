import type { Meta, StoryObj } from '@storybook/react-vite'
import scanGiveWay from '../../assets/photos/scan-give-way.png'
import scanPedestrian from '../../assets/photos/scan-pedestrian.png'
import scanPriorityRoad from '../../assets/photos/scan-priority-road.png'
import { ScanRow } from './ScanRow'

/** Строка одного скана в списке (Home → RecentScans, History). */
const meta = {
  title: 'Components/ScanRow',
  component: ScanRow,
  tags: ['autodocs'],
  args: { category: 'red', title: 'Уступите дорогу', meta: 'Сегодня, 14:20', thumbSrc: scanGiveWay },
  argTypes: {
    category: { control: 'inline-radio', options: ['neutral', 'red', 'blue'] },
    thumbSrc: { control: 'text' },
    title: { control: 'text' },
    meta: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ScanRow>

export default meta
type Story = StoryObj<typeof meta>

export const Red: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}
export const Blue: Story = {
  args: { category: 'blue', title: 'Пешеходный переход', meta: 'Вчера, 09:10', thumbSrc: scanPedestrian },
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}
export const Neutral: Story = {
  args: { category: 'neutral', title: 'Главная дорога', meta: 'Вчера, 13:08', thumbSrc: scanPriorityRoad },
  render: (args) => (
    <div style={{ width: 360 }}>
      <ScanRow {...args} />
    </div>
  ),
}
/** Без thumbSrc — старая декоративная заглушка на category-цвете. */
export const NoPhoto: Story = {
  args: { thumbSrc: undefined },
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
      <ScanRow category="red" title="Уступите дорогу" meta="Сегодня, 14:20" thumbSrc={scanGiveWay} />
      <ScanRow category="blue" title="Пешеходный переход" meta="Вчера, 09:10" thumbSrc={scanPedestrian} />
      <ScanRow category="neutral" title="Главная дорога" meta="Вчера, 13:08" thumbSrc={scanPriorityRoad} />
    </div>
  ),
}
