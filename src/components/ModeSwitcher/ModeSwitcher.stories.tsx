import type { Meta, StoryObj } from '@storybook/react-vite'
import { ModeSwitcher } from './ModeSwitcher'

const PHOTO_BACKDROP = 'linear-gradient(135deg, #8fb8e0 0%, #d9c9a3 55%, #7a8f6e 100%)'

/** Pill-переключатель режима поверх видоискателя (например, «Распознавание/Обучение»). */
const meta = {
  title: 'Components/ModeSwitcher',
  component: ModeSwitcher,
  tags: ['autodocs'],
  args: { modes: ['Распознавание', 'Обучение'], activeIndex: 0 },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ModeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 32, background: PHOTO_BACKDROP, borderRadius: 12 }}>
      <ModeSwitcher {...args} />
    </div>
  ),
}

export const SecondModeActive: Story = {
  args: { activeIndex: 1 },
  render: (args) => (
    <div style={{ padding: 32, background: PHOTO_BACKDROP, borderRadius: 12 }}>
      <ModeSwitcher {...args} />
    </div>
  ),
}
