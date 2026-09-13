import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

/** Основное действие пользователя. Variant × State × Size — см. ds/components.md. */
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { variant: 'primary', size: 'md', children: 'Продолжить', loading: false, disabled: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'inline-radio', options: ['md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'Отмена' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Подробнее' } }
export const Disabled: Story = { args: { disabled: true } }
/** Статичный плейсхолдер — по PRD спиннер только на primary (распознавание, проверка ответа). */
export const Loading: Story = { args: { loading: true } }
export const Large: Story = { args: { size: 'lg' } }

/** Variant × State × Size — вся матрица рядом, как в UI-ките Figma. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['md', 'lg'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
            <Button key={variant} variant={variant} size={size}>
              {variant === 'primary' ? 'Продолжить' : variant === 'secondary' ? 'Отмена' : 'Подробнее'}
            </Button>
          ))}
          <Button size={size} disabled>
            Продолжить
          </Button>
          <Button size={size} loading>
            Продолжить
          </Button>
        </div>
      ))}
    </div>
  ),
}
