import type { HTMLAttributes } from 'react'
import styles from './ProgressBar.module.css'

export type ProgressBarVariant = 'accent' | 'category-blue'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ProgressBarVariant
  label: string
  percent: number
}

export function ProgressBar({ variant = 'accent', label, percent, className, ...rest }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent))
  const classes = [styles.wrapper, styles[variant], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <div className={styles.labelRow}>
        <span className={`${styles.label} ds-body-xs`}>{label}</span>
        <span className={`${styles.percent} ds-label-xs`}>{clamped}%</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}
