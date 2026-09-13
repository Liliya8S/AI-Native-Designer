import type { HTMLAttributes } from 'react'
import styles from './StatCard.module.css'

export type StatCardVariant = 'neutral' | 'red' | 'blue' | 'success'

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: StatCardVariant
  value: string
  label: string
}

export function StatCard({ variant = 'neutral', value, label, className, ...rest }: StatCardProps) {
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={`${styles.value} ds-heading-2xl`}>{value}</span>
      <span className={`${styles.label} ds-body-xs`}>{label}</span>
    </div>
  )
}
