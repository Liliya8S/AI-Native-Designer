import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Toast } from './Toast'

/** Всплывающее уведомление внизу экрана. 4 варианта цвета. */
const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { variant: 'success', children: 'Прогресс сохранён' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['success', 'warning', 'error', 'info'] },
    children: { control: 'text' },
  },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = { render: (args) => <div style={{ width: 360 }}><Toast {...args} /></div> }
export const Warning: Story = {
  args: { variant: 'warning', children: 'Проверьте интернет-соединение' },
  render: (args) => <div style={{ width: 360 }}><Toast {...args} /></div>,
}
export const Error: Story = {
  args: { variant: 'error', children: 'Не удалось сохранить прогресс' },
  render: (args) => <div style={{ width: 360 }}><Toast {...args} /></div>,
}
export const Info: Story = {
  args: { variant: 'info', children: 'Доступна новая версия билетов' },
  render: (args) => <div style={{ width: 360 }}><Toast {...args} /></div>,
}

/** Крайний случай: длинное сообщение — переносится по строкам, не растягивает layout. */
export const LongMessage: Story = {
  args: {
    variant: 'error',
    children: 'Не удалось синхронизировать прогресс теста — проверьте соединение с интернетом и повторите попытку через несколько секунд',
  },
  render: (args) => <div style={{ width: 360 }}><Toast {...args} /></div>,
}

/** Живое появление/исчезновение по кнопке — видно анимацию появления (220мс). */
export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [visible, setVisible] = useState(false)
      function show() {
        setVisible(true)
        window.setTimeout(() => setVisible(false), 2200)
      }
      return (
        <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
          <Button onClick={show}>Показать Toast</Button>
          {visible && <Toast variant="success">Прогресс сохранён</Toast>}
        </div>
      )
    }
    return <Demo />
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 360 }}>
      <Toast variant="success">Прогресс сохранён</Toast>
      <Toast variant="warning">Проверьте интернет-соединение</Toast>
      <Toast variant="error">Не удалось сохранить прогресс</Toast>
      <Toast variant="info">Доступна новая версия билетов</Toast>
    </div>
  ),
}
