import type { Meta, StoryObj } from '@storybook/react-vite'
import { OverlayChip } from './OverlayChip'

/** Полупрозрачная пилюля-подсказка поверх фото/видео (например, видоискателя камеры). */
const meta = {
  title: 'Components/OverlayChip',
  component: OverlayChip,
  tags: ['autodocs'],
  args: { children: 'Наведите на знак' },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof OverlayChip>

export default meta
type Story = StoryObj<typeof meta>

/** Рассчитан на тёмный/фото-фон — здесь показан на тёмной подложке, как в продукте. */
export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 32, background: '#1a1a1a', borderRadius: 12 }}>
      <OverlayChip {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 32, background: '#1a1a1a', borderRadius: 12 }}>
      <OverlayChip>Наведите на знак</OverlayChip>
      <OverlayChip>00:12</OverlayChip>
      <OverlayChip>4 из 10</OverlayChip>
    </div>
  ),
}
