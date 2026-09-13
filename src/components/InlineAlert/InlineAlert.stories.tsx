import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineAlert } from './InlineAlert'

/** Встроенный баннер с иконкой и текстом. Variant × Surface — см. ds/components.md. */
const meta = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
  tags: ['autodocs'],
  args: { variant: 'info', surface: 'subtle', children: 'Наведите камеру ближе к знаку' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['error', 'warning', 'info', 'success'] },
    surface: { control: 'inline-radio', options: ['solid', 'subtle'] },
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof InlineAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <InlineAlert {...args} />
    </div>
  ),
}
/** Surface=solid — для контекстов поверх фото/видео (например, поверх видоискателя). */
export const ErrorSolid: Story = {
  args: { variant: 'error', surface: 'solid', children: 'Не удалось распознать чётко. Повторите съёмку' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <InlineAlert {...args} />
    </div>
  ),
}
export const WarningSubtle: Story = {
  args: { variant: 'warning', surface: 'subtle', children: 'Проверьте освещение — знак виден нечётко' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <InlineAlert {...args} />
    </div>
  ),
}
export const SuccessSubtle: Story = {
  args: { variant: 'success', surface: 'subtle', children: 'Знак успешно распознан' },
  render: (args) => (
    <div style={{ width: 360 }}>
      <InlineAlert {...args} />
    </div>
  ),
}

/** Variant × Surface — вся матрица 4×2 рядом. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      {(['error', 'warning', 'info', 'success'] as const).map((variant) =>
        (['solid', 'subtle'] as const).map((surface) => (
          <InlineAlert key={`${variant}-${surface}`} variant={variant} surface={surface}>
            {variant}, {surface}
          </InlineAlert>
        )),
      )}
    </div>
  ),
}
