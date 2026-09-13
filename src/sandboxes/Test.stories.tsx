import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressBar } from '../components/ProgressBar'
import { QuestionCard, type QuestionCardAnswer } from '../components/QuestionCard'
import { Toast } from '../components/Toast'

/**
 * Экран прохождения теста ПДД: ProgressBar сверху + QuestionCard с живым
 * выбором ответа. Выбор верного варианта помечает его correct и продвигает
 * прогресс — проверяем, что компоненты реагируют друг на друга в потоке
 * теста, а не только по отдельности.
 */
const meta = {
  title: 'Sandboxes/Тест ПДД',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const QUESTION = 'Кто должен уступить дорогу на перекрёстке?'
const CORRECT_INDEX = 1
const BASE_ANSWERS: QuestionCardAnswer[] = [
  { letter: 'A', label: 'Водитель синей машины' },
  { letter: 'B', label: 'Водитель трамвая' },
  { letter: 'C', label: 'Водитель красной машины' },
]

function QuizFlowDemo() {
  const [answered, setAnswered] = useState<number | null>(null)
  const [step, setStep] = useState(1)

  const answers: QuestionCardAnswer[] = BASE_ANSWERS.map((a, i) => {
    if (answered === null) return a
    if (i === CORRECT_INDEX) return { ...a, state: 'correct' }
    if (i === answered) return { ...a, state: 'incorrect' }
    return a
  })

  function handleSelect(index: number) {
    if (answered !== null) return
    setAnswered(index)
  }

  function handleNext() {
    setAnswered(null)
    setStep((s) => Math.min(s + 1, 10))
  }

  return (
    <div style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <ProgressBar label={`Вопрос ${step} из 10`} percent={step * 10} />
      <QuestionCard
        question={QUESTION}
        answers={answers}
        onSelectAnswer={handleSelect}
        primaryLabel="Дальше"
        secondaryLabel="Пропустить"
        onPrimary={handleNext}
        onSecondary={handleNext}
      />
      {answered !== null && (
        <Toast variant={answered === CORRECT_INDEX ? 'success' : 'error'}>
          {answered === CORRECT_INDEX ? 'Верно!' : 'Неверно — правильный ответ: B'}
        </Toast>
      )}
    </div>
  )
}

export const QuizFlow: Story = {
  render: () => <QuizFlowDemo />,
}
