import type { HTMLAttributes } from 'react'
import { Badge } from '../Badge'
import styles from './LessonRow.module.css'

export type LessonRowStatus = 'past' | 'today' | 'upcoming'

export interface LessonRowProps extends HTMLAttributes<HTMLDivElement> {
  status?: LessonRowStatus
  initials: string
  time: string
  meta: string
}

export function LessonRow({ status = 'upcoming', initials, time, meta, className, ...rest }: LessonRowProps) {
  const classes = [styles.row, status === 'today' ? styles.today : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={`${styles.avatar} ds-body-sm-medium`}>{initials}</span>
      <div className={styles.textCol}>
        <span className={`${styles.time} ds-body-sm-medium`}>{time}</span>
        <span className={`${styles.meta} ds-body-xs`}>{meta}</span>
      </div>
      {status === 'past' && <Badge variant="neutral">Прошло</Badge>}
      {status === 'today' && <Badge variant="accent">Сегодня</Badge>}
      {status === 'upcoming' && <span className={styles.chevron}>›</span>}
    </div>
  )
}
