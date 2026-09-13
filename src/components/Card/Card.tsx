import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  children?: ReactNode
}

export function Card({ title, children, className, ...rest }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={`${styles.title} ds-heading-lg`}>{title}</span>
      {children && <span className={`${styles.body} ds-body-sm`}>{children}</span>}
    </div>
  )
}
