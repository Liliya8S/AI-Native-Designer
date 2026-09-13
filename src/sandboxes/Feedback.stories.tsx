import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LessonRow } from '../components/LessonRow'
import { InlineAlert } from '../components/InlineAlert'
import { Toast } from '../components/Toast'

/**
 * Блок расписания: список LessonRow + InlineAlert-предупреждение сверху.
 * Клик по ближайшему занятию показывает Toast с подтверждением — так
 * компоненты обратной связи проверяются в реальной связке, а не по одному.
 */
const meta = {
  title: 'Sandboxes/Данные и обратная связь',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function ScheduleWithFeedbackDemo() {
  const [toast, setToast] = useState(false)

  function notify() {
    setToast(true)
    window.setTimeout(() => setToast(false), 2200)
  }

  return (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <InlineAlert variant="warning" surface="subtle">
        Инструктор сменился — проверьте адрес встречи
      </InlineAlert>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <LessonRow status="today" initials="АВ" time="Сегодня, 18:00" meta="ул. Ленина, 12" onClick={notify} style={{ cursor: 'pointer' }} />
        <LessonRow status="upcoming" initials="АВ" time="Пт, 10:00" meta="ул. Ленина, 12" onClick={notify} style={{ cursor: 'pointer' }} />
        <LessonRow status="past" initials="АВ" time="Вт, 18:00" meta="ул. Ленина, 12" />
      </div>
      {toast && <Toast variant="success">Напоминание отправлено</Toast>}
    </div>
  )
}

export const ScheduleList: Story = {
  render: () => <ScheduleWithFeedbackDemo />,
}
