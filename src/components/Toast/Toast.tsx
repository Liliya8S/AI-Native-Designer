import type { HTMLAttributes } from 'react'
import styles from './Toast.module.css'

export type ToastVariant = 'success' | 'warning' | 'error' | 'info'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant
}

export function Toast({ variant = 'success', className, children, ...rest }: ToastProps) {
  const classes = [styles.toast, styles[variant], 'ds-body-sm-medium', className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
