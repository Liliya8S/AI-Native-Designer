import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Modal } from './Modal'
import { Button } from '../Button'

/** Модальное окно с подтверждением действия (собрано из инстансов Button). */
const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Заголовок модалки',
    children: 'Текст модального окна с описанием действия, которое предстоит подтвердить.',
    primaryLabel: 'Подтвердить',
    secondaryLabel: 'Отмена',
  },
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'text' },
    primaryLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

/** Живое открытие/закрытие по кнопке — как ведёт себя в реальном сценарии. */
export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [open, setOpen] = useState(false)
      return (
        <div style={{ padding: 48 }}>
          <Button onClick={() => setOpen(true)}>Открыть Modal</Button>
          <Modal
            open={open}
            title="Удалить скан?"
            onClose={() => setOpen(false)}
            onPrimary={() => setOpen(false)}
            onSecondary={() => setOpen(false)}
            primaryLabel="Удалить"
            secondaryLabel="Отмена"
          >
            Это действие нельзя отменить — история распознавания этого знака будет удалена.
          </Modal>
        </div>
      )
    }
    return <Demo />
  },
}

/** Крайний случай: длинный заголовок и текст — модалка скроллится, а не растягивается за экран. */
export const LongContent: Story = {
  args: {
    title: 'Подтвердите отмену записи на итоговый экзамен ГИБДД, назначенный на ближайшую субботу',
    children:
      'Отмена записи менее чем за 48 часов до экзамена может повлиять на возможность записаться на ближайшую доступную дату. Оплаченный взнос за экзамен в этом случае не возвращается согласно правилам автошколы. Убедитесь, что вы уведомили инструктора заранее.',
    primaryLabel: 'Всё равно отменить',
    secondaryLabel: 'Оставить запись',
  },
}

export const AllVariants: Story = { args: { open: true } }
