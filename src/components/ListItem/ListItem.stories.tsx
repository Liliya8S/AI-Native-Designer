import type { Meta, StoryObj } from '@storybook/react-vite'
import { ICON_NAMES } from '../Icon'
import { ListItem } from './ListItem'

/** Строка меню/настроек: иконка + текст + опциональный шеврон. */
const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  args: { style2: 'default', icon: 'history-alt', label: 'История вождений' },
  argTypes: {
    style2: { control: 'inline-radio', options: ['default', 'destructive'], name: 'style' },
    icon: { control: 'select', options: ICON_NAMES },
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
  args: { style2: 'destructive', icon: 'sign-out-alt', label: 'Выйти' },
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
      <ListItem icon="history-alt" label="История вождений" />
      <ListItem icon="setting" label="Настройки" />
      <ListItem icon="sign-out-alt" style2="destructive" label="Выйти" />
    </div>
  ),
}
