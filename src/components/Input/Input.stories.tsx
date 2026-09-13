import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

/** Однострочное текстовое поле. Type × State — см. ds/components.md. */
const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { type: 'text', state: 'default', placeholder: 'Текст' },
  argTypes: {
    type: { control: 'inline-radio', options: ['text', 'search'] },
    state: { control: 'inline-radio', options: ['default', 'error', 'focus', 'filled'] },
    placeholder: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
export const Search: Story = { args: { type: 'search', placeholder: 'Поиск' } }
export const Error: Story = { args: { state: 'error', defaultValue: 'Неверное значение' } }
export const Focus: Story = { args: { state: 'focus' } }
export const Filled: Story = { args: { state: 'filled', defaultValue: 'Значение' } }

/** Type × State — вся матрица рядом. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Input placeholder="Текст" />
      <Input type="search" placeholder="Поиск" />
      <Input state="error" defaultValue="Неверное значение" />
      <Input state="focus" placeholder="В фокусе" />
      <Input state="filled" defaultValue="Значение" />
    </div>
  ),
}
