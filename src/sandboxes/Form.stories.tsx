import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

/**
 * Форма записи на занятие: пара Input + кнопки submit/cancel. Живая
 * валидация — пустое поле «Телефон» переводит Input в state=error при
 * попытке отправить, ошибка снимается при вводе.
 */
const meta = {
  title: 'Sandboxes/Форма',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function BookingFormDemo() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!phone.trim()) {
      setPhoneError(true)
      return
    }
    setPhoneError(false)
    setSubmitted(true)
  }

  return (
    <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Input
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Телефон"
        value={phone}
        state={phoneError ? 'error' : 'default'}
        onChange={(e) => {
          setPhone(e.target.value)
          if (phoneError) setPhoneError(false)
        }}
      />
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" onClick={() => { setName(''); setPhone(''); setPhoneError(false); setSubmitted(false) }}>
          Отмена
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Записаться
        </Button>
      </div>
      {submitted && <span className="ds-body-xs" style={{ color: 'var(--text-success)' }}>Заявка отправлена</span>}
    </div>
  )
}

export const BookingLesson: Story = {
  render: () => <BookingFormDemo />,
}
