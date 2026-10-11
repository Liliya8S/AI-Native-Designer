import type { ButtonHTMLAttributes } from 'react'
import { Icon } from '../Icon'
import styles from './AnswerOption.module.css'

export type AnswerOptionState = 'default' | 'selected' | 'correct' | 'incorrect'

export interface AnswerOptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: AnswerOptionState
  letter: string
  label: string
}

export function AnswerOption({ state = 'default', letter, label, className, ...rest }: AnswerOptionProps) {
  const classes = [styles.option, state !== 'default' ? styles[state] : '', className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...rest}>
      <span className={`${styles.letter} ds-label-xs`}>{letter}</span>
      <span className={`${styles.label} ds-body-sm-medium`}>{label}</span>
      {(state === 'correct' || state === 'incorrect') && (
        <span className={styles.indicator} aria-hidden>
          {state === 'correct' && <Icon name="check-circle" size={20} />}
          {state === 'incorrect' && <Icon name="close-bold" size={12} />}
        </span>
      )}
    </button>
  )
}
