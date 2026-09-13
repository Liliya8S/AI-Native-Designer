import type { HTMLAttributes } from 'react'
import styles from './ScanRow.module.css'

export type ScanRowCategory = 'neutral' | 'red' | 'blue'

export interface ScanRowProps extends HTMLAttributes<HTMLDivElement> {
  category?: ScanRowCategory
  title: string
  meta: string
}

export function ScanRow({ category = 'neutral', title, meta, className, ...rest }: ScanRowProps) {
  const classes = [styles.row, styles[category], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.thumb} aria-hidden />
      <div className={styles.textCol}>
        <span className={`${styles.title} ds-body-sm-medium`}>{title}</span>
        <span className={`${styles.meta} ds-body-xs`}>{meta}</span>
      </div>
      <span className={styles.chevron}>›</span>
    </div>
  )
}
