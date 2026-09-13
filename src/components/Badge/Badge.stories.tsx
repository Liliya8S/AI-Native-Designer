import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

/** Маленький лейбл статуса/категории. 9 вариантов цвета. */
const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { variant: 'success', children: 'Сдано' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info', 'category-red', 'category-blue', 'neutral', 'accent', 'white'],
    },
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {}
export const Warning: Story = { args: { variant: 'warning', children: 'В процессе' } }
export const Error: Story = { args: { variant: 'error', children: 'Провалено' } }
export const Info: Story = { args: { variant: 'info', children: 'Новое' } }
export const CategoryRed: Story = { args: { variant: 'category-red', children: 'Штраф' } }
export const CategoryBlue: Story = { args: { variant: 'category-blue', children: 'Знаки' } }
export const Neutral: Story = { args: { variant: 'neutral', children: 'Черновик' } }
export const Accent: Story = { args: { variant: 'accent', children: 'PRO' } }
/** Вариант white — рассчитан на тёмную/фото-подложку. */
export const White: Story = {
  args: { variant: 'white', children: 'PRO' },
  render: (args) => (
    <div style={{ padding: 24, background: '#1a1a1a', borderRadius: 12 }}>
      <Badge {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: 24, background: '#1a1a1a', borderRadius: 12 }}>
      <Badge variant="success">Сдано</Badge>
      <Badge variant="warning">В процессе</Badge>
      <Badge variant="error">Провалено</Badge>
      <Badge variant="info">Новое</Badge>
      <Badge variant="category-red">Штраф</Badge>
      <Badge variant="category-blue">Знаки</Badge>
      <Badge variant="neutral">Черновик</Badge>
      <Badge variant="accent">PRO</Badge>
      <Badge variant="white">PRO</Badge>
    </div>
  ),
}
