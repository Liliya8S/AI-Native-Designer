import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

export type BadgeVariant =
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'category-red'
  | 'category-blue'
  | 'neutral'
  | 'accent'
  | 'white'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'success', className, children, ...rest }: BadgeProps) {
  const classes = [styles.badge, styles[variant], 'ds-label-xs', className].filter(Boolean).join(' ')
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
