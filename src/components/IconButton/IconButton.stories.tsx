import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconButton } from './IconButton'

/** Кнопка под иконку (тач-таргет). Surface=dark/light/translucent — см. ds/components.md. */
const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { surface: 'dark', iconName: 'setting' },
  argTypes: {
    surface: { control: 'inline-radio', options: ['dark', 'light', 'translucent'] },
    iconName: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

/** 44px, surface-action-primary, белая иконка — исходный дефолт, используется в Navbar. */
export const Dark: Story = { args: { surface: 'dark' } }
/** 32px, surface-well, тёмная иконка — шапки светлых экранов. */
export const Light: Story = { args: { surface: 'light' } }
/** 40px, полупрозрачный белый 12%, белая иконка — тёмные AR-экраны камеры. */
export const Translucent: Story = {
  args: { surface: 'translucent' },
  decorators: [
    (Story) => (
      <div style={{ background: 'var(--surface-inverse)', padding: 24, borderRadius: 16 }}>
        <Story />
      </div>
    ),
  ],
}

/** Все три Surface рядом (translucent на тёмной подложке — иначе не разглядеть). */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton surface="dark" iconName="setting" />
      <IconButton surface="light" iconName="arrow-left" />
      <div style={{ background: 'var(--surface-inverse)', padding: 24, borderRadius: 16 }}>
        <IconButton surface="translucent" iconName="times" />
      </div>
    </div>
  ),
}
