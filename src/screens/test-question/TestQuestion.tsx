import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnswerOption, Badge, Button, ProgressBar } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import { QuestionImage } from './parts/QuestionImage'
import styles from './TestQuestion.module.css'

const ANSWERS = [
  { letter: 'A', label: 'Уступите дорогу' },
  { letter: 'B', label: 'Главная дорога' },
  { letter: 'C', label: 'Пешеходный переход' },
]

/** Верный вариант для демо-логики выбора ответа — мок, без реального слоя данных. */
const CORRECT_LETTER = 'A'

export function TestQuestion() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = () => {
    if (answered || selected === null) return
    setAnswered(true)
    window.setTimeout(() => navigate('/screens/test-question-audio'), 900)
  }

  return (
    <PhoneFrame>
      <div className={styles.tagsRow}>
        <Badge variant="neutral">Базовые знания</Badge>
      </div>
      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <QuestionImage />
          <span className={`ds-heading-lg ${styles.question}`}>Что означает этот знак?</span>
          <div className={styles.answers}>
            {ANSWERS.map((a) => {
              const state = !answered
                ? a.letter === selected
                  ? 'selected'
                  : 'default'
                : a.letter === CORRECT_LETTER
                  ? 'correct'
                  : a.letter === selected
                    ? 'incorrect'
                    : 'default'
              return (
                <AnswerOption
                  key={a.letter}
                  letter={a.letter}
                  label={a.label}
                  state={state}
                  disabled={answered}
                  onClick={() => setSelected(a.letter)}
                />
              )
            })}
          </div>
          <div className={styles.actions}>
            <Button variant="primary" disabled={selected === null || answered} onClick={handleAnswer}>
              Ответить
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.progressFooter}>
        <ProgressBar variant="accent" label="Пройдено 3 из 10" percent={30} />
      </div>
      <TabBar activeIndex={1} />
    </PhoneFrame>
  )
}
