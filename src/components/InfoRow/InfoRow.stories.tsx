import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoRow } from './InfoRow'

/** Плоская строка: иконка + текст, опциональная ссылка-трейлинг справа. */
const meta = {
  title: 'Components/InfoRow',
  component: InfoRow,
  tags: ['autodocs'],
  args: { label: '14 вопросов по теме', trailing: false, trailingLabel: 'Пройти' },
  argTypes: {
    label: { control: 'text' },
    trailing: { control: 'boolean' },
    trailingLabel: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InfoRow>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <InfoRow {...args} />
    </div>
  ),
}

/** С boolean-свойством Show Trailing Link — CTA-ссылка справа. */
export const WithTrailingLink: Story = {
  args: { trailing: true },
  render: (args) => (
    <div style={{ width: 320 }}>
      <InfoRow {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 320 }}>
      <InfoRow label="14 вопросов по теме" />
      <InfoRow label="14 вопросов по теме" trailing trailingLabel="Пройти" />
    </div>
  ),
}
