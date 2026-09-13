import { AnswerOption, type AnswerOptionState } from '../AnswerOption'
import { Button } from '../Button'
import styles from './QuestionCard.module.css'

export interface QuestionCardAnswer {
  letter: string
  label: string
  state?: AnswerOptionState
}

export interface QuestionCardProps {
  question: string
  answers: QuestionCardAnswer[]
  primaryLabel?: string
  secondaryLabel?: string
  onSelectAnswer?: (index: number) => void
  onPrimary?: () => void
  onSecondary?: () => void
}

export function QuestionCard({
  question,
  answers,
  primaryLabel = 'Продолжить',
  secondaryLabel = 'Пропустить',
  onSelectAnswer,
  onPrimary,
  onSecondary,
}: QuestionCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.image} aria-hidden />
      <span className={`${styles.question} ds-heading-lg`}>{question}</span>
      <div className={styles.answers}>
        {answers.map((a, i) => (
          <AnswerOption
            key={i}
            letter={a.letter}
            label={a.label}
            state={a.state}
            onClick={() => onSelectAnswer?.(i)}
          />
        ))}
      </div>
      <div className={styles.actions}>
        <Button variant="primary" onClick={onPrimary}>
          {primaryLabel}
        </Button>
        <Button variant="secondary" onClick={onSecondary}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  )
}
