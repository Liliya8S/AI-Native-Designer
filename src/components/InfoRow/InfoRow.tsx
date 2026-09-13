import type { HTMLAttributes } from 'react'
import styles from './InfoRow.module.css'

export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  trailing?: boolean
  trailingLabel?: string
}

export function InfoRow({ label, trailing = false, trailingLabel = 'Пройти', className, ...rest }: InfoRowProps) {
  const classes = [styles.row, className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.iconBox} aria-hidden />
      <span className={`${styles.label} ds-body-sm-medium`}>{label}</span>
      {trailing && <span className={`${styles.trailing} ds-body-sm-medium`}>{trailingLabel} →</span>}
    </div>
  )
}
