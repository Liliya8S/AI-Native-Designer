import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar } from './Navbar'

/** Горизонтальная шапка экрана (собрана из инстанса IconButton). */
const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: { title: 'ПДД Ассистент' },
  argTypes: {
    title: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 375, background: 'var(--surface-default)' }}>
      <Navbar {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ width: 375, background: 'var(--surface-default)' }}>
      <Navbar {...args} />
    </div>
  ),
}
