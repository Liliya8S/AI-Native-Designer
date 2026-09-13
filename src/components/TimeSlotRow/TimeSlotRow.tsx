import type { HTMLAttributes } from 'react'
import styles from './TimeSlotRow.module.css'

export type TimeSlotRowState = 'default' | 'selected' | 'disabled'

export interface TimeSlotRowProps extends HTMLAttributes<HTMLDivElement> {
  state?: TimeSlotRowState
  day: string
  weekday: string
  time: string
  meta: string
}

export function TimeSlotRow({
  state = 'default',
  day,
  weekday,
  time,
  meta,
  className,
  ...rest
}: TimeSlotRowProps) {
  const classes = [styles.row, state !== 'default' ? styles[state] : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <div className={styles.dateBox}>
        <span className={`${styles.day} ds-body-sm-medium`}>{day}</span>
        <span className={`${styles.weekday} ds-body-xs`}>{weekday}</span>
      </div>
      <div className={styles.textCol}>
        <span className={`${styles.time} ds-body-sm-medium`}>{time}</span>
        <span className={`${styles.meta} ds-body-xs`}>{meta}</span>
      </div>
      {state !== 'disabled' && (
        <span className={`${styles.indicator} ${state === 'selected' ? styles.indicatorSelected : ''}`}>
          {state === 'selected' && '✓'}
        </span>
      )}
    </div>
  )
}
