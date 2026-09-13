import type { Meta, StoryObj } from '@storybook/react-vite'
import { ListItem } from './ListItem'

/** Строка меню/настроек: иконка + текст + опциональный шеврон. */
const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  args: { style2: 'default', label: 'История вождений' },
  argTypes: {
    style2: { control: 'inline-radio', options: ['default', 'destructive'], name: 'style' },
    label: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <ListItem {...args} />
    </div>
  ),
}
/** text-error, без шеврона — например «Выйти». */
export const Destructive: Story = {
  args: { style2: 'destructive', label: 'Выйти' },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ListItem {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 320 }}>
      <ListItem label="История вождений" />
      <ListItem label="Настройки" />
      <ListItem style2="destructive" label="Выйти" />
    </div>
  ),
}
