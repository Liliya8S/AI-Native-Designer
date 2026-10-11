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

const PHOTO_BACKDROP = 'linear-gradient(135deg, #8fb8e0 0%, #d9c9a3 55%, #7a8f6e 100%)'

/** Тёмная пилюля (scrim-60) + белый текст — рассчитан на светлый/пёстрый фото-фон, здесь имитация кадра камеры. */
export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 32, background: PHOTO_BACKDROP, borderRadius: 12 }}>
      <OverlayChip {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 8, padding: 32, background: PHOTO_BACKDROP, borderRadius: 12 }}>
      <OverlayChip>Наведите на знак</OverlayChip>
      <OverlayChip>00:12</OverlayChip>
      <OverlayChip>4 из 10</OverlayChip>
    </div>
  ),
}
