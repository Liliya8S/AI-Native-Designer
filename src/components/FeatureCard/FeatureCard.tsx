import type { HTMLAttributes } from 'react'
import styles from './FeatureCard.module.css'

export type FeatureCardIconSide = 'left' | 'right'

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  iconSide?: FeatureCardIconSide
  title: string
  subtitle: string
}

export function FeatureCard({ iconSide = 'left', title, subtitle, className, ...rest }: FeatureCardProps) {
  const classes = [styles.card, iconSide === 'right' ? styles.right : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.iconWrap} aria-hidden />
      <div className={styles.textCol}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.subtitle} ds-body-xs`}>{subtitle}</span>
      </div>
    </div>
  )
}
