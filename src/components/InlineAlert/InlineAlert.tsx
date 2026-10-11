import type { HTMLAttributes } from 'react'
import { Icon, type IconName } from '../Icon'
import styles from './InlineAlert.module.css'

export type InlineAlertVariant = 'error' | 'warning' | 'info' | 'success'
export type InlineAlertSurface = 'solid' | 'subtle'

export interface InlineAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: InlineAlertVariant
  surface?: InlineAlertSurface
  /** Показывать иконку слева. В Figma — переключаемая видимость дочернего узла на инстансе (по умолчанию true). */
  icon?: boolean
}

/** Реальные иконки по варианту — см. ds/components.md. */
const VARIANT_ICON: Record<InlineAlertVariant, IconName> = {
  error: 'exclamation-circle',
  warning: 'exclamation-triangle',
  info: 'info-circle',
  success: 'check-circle',
}

export function InlineAlert({
  variant = 'info',
  surface = 'subtle',
  icon = true,
  className,
  children,
  ...rest
}: InlineAlertProps) {
  const classes = [styles.alert, styles[variant], styles[surface], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {icon && (
        <span className={styles.icon} aria-hidden>
          <Icon name={VARIANT_ICON[variant]} size={20} />
        </span>
      )}
      <span className="ds-body-sm-medium">{children}</span>
    </div>
  )
}
