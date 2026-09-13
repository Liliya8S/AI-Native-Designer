import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from '../components/Modal'
import { Input } from '../components/Input'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'

/**
 * Модальное окно в реальной композиции: заголовок + Input + Badge + пара
 * кнопок (secondary/primary). Проверяем, что компоненты уживаются вместе —
 * фокус в Input, hover/active на кнопках, закрытие по клику на оверлей/крестик.
 */
const meta = {
  title: 'Sandboxes/Модальное окно',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function RenameLessonModalDemo() {
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState('Занятие №12')

  return (
    <div style={{ minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!open && <Button onClick={() => setOpen(true)}>Открыть модалку</Button>}
      <Modal
        open={open}
        title="Переименовать занятие"
        primaryLabel="Сохранить"
        secondaryLabel="Отмена"
        onClose={() => setOpen(false)}
        onSecondary={() => setOpen(false)}
        onPrimary={() => setOpen(false)}
      >
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <span style={{ display: 'block', marginTop: 12 }}>
          <Badge variant="accent">Оплачено</Badge>
        </span>
      </Modal>
    </div>
  )
}

export const RenameLesson: Story = {
  render: () => <RenameLessonModalDemo />,
}
