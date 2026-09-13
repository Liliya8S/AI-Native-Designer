import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from './ProgressBar'

/** Прогресс-бар с подписью и процентом (LabelRow + Track + Fill). */
const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: { variant: 'accent', label: 'Вождение', percent: 21 },
  argTypes: {
    variant: { control: 'inline-radio', options: ['accent', 'category-blue'] },
    label: { control: 'text' },
    percent: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Accent: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
}

export const CategoryBlue: Story = {
  args: { variant: 'category-blue', label: 'Билеты ПДД', percent: 48 },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ProgressBar {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <ProgressBar variant="accent" label="Вождение" percent={21} />
      <ProgressBar variant="category-blue" label="Билеты ПДД" percent={48} />
    </div>
  ),
}
