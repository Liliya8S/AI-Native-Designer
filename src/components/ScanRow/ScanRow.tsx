import type { HTMLAttributes } from 'react'
import { Icon } from '../Icon'
import styles from './ScanRow.module.css'

export type ScanRowCategory = 'neutral' | 'red' | 'blue'

export interface ScanRowProps extends HTMLAttributes<HTMLDivElement> {
  category?: ScanRowCategory
  thumbSrc?: string
  title: string
  meta: string
}

export function ScanRow({ category = 'neutral', thumbSrc, title, meta, className, ...rest }: ScanRowProps) {
  const classes = [styles.row, styles[category], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {thumbSrc ? (
        <img className={styles.thumb} src={thumbSrc} alt="" />
      ) : (
        <span className={styles.thumb} aria-hidden />
      )}
      <div className={styles.textCol}>
        <span className={`${styles.title} ds-body-sm-medium`}>{title}</span>
        <span className={`${styles.meta} ds-body-xs`}>{meta}</span>
      </div>
      <span className={styles.chevron}>
        <Icon name="angle-right" size={12} />
      </span>
    </div>
  )
}
