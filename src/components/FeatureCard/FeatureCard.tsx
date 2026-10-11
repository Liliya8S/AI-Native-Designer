import type { HTMLAttributes } from 'react'
import { Icon, type IconName } from '../Icon'
import styles from './FeatureCard.module.css'

export type FeatureCardIconSide = 'left' | 'right'

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  iconSide?: FeatureCardIconSide
  icon?: IconName
  title: string
  subtitle: string
}

export function FeatureCard({ iconSide = 'left', icon, title, subtitle, className, ...rest }: FeatureCardProps) {
  const classes = [styles.card, iconSide === 'right' ? styles.right : '', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.iconWrap} aria-hidden={!icon}>
        {icon && <Icon name={icon} size={24} />}
      </span>
      <div className={styles.textCol}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.subtitle} ds-body-xs`}>{subtitle}</span>
      </div>
    </div>
  )
}
