import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon, ICON_NAMES } from './Icon'

/** Реальная иконка из набора Unicons (Line) — тот же набор, что в Figma. Красится через currentColor. */
const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: { name: 'home', size: 20 },
  argTypes: {
    name: { control: 'select', options: ICON_NAMES },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Large: Story = { args: { name: 'shield-check', size: 32 } }

/** Цвет наследуется из CSS color — здесь показан на акцентном тексте. */
export const Colored: Story = {
  args: { name: 'check-circle', size: 24 },
  render: (args) => (
    <span style={{ color: 'var(--text-success)' }}>
      <Icon {...args} />
    </span>
  ),
}

/** Весь набор — 28 иконок, скопированных из фрейма «Line» в Figma. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 20, width: 480 }}>
      {ICON_NAMES.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon name={name} size={24} />
          <span style={{ fontSize: 10, color: 'var(--text-muted)', textAlign: 'center' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
}
