import type { Meta, StoryObj } from '@storybook/react-vite'
import { Logo } from './Logo'

/** Логотип продукта в чипе (`surface-well`) — шапка главного экрана. */
const meta = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => <Logo />,
}
