import type { HTMLAttributes } from 'react'
import styles from './InlineAlert.module.css'

export type InlineAlertVariant = 'error' | 'warning' | 'info' | 'success'
export type InlineAlertSurface = 'solid' | 'subtle'

export interface InlineAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: InlineAlertVariant
  surface?: InlineAlertSurface
}

/** Глиф-заглушка на вариант — см. комментарий в InlineAlert.module.css */
const GLYPH: Record<InlineAlertVariant, string> = {
  error: '!',
  warning: '!',
  info: 'i',
  success: '✓',
}

export function InlineAlert({
  variant = 'info',
  surface = 'subtle',
  className,
  children,
  ...rest
}: InlineAlertProps) {
  const classes = [styles.alert, styles[variant], styles[surface], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.icon} aria-hidden>
        {GLYPH[variant]}
      </span>
      <span className="ds-body-sm-medium">{children}</span>
    </div>
  )
}
