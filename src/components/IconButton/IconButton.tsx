import type { ButtonHTMLAttributes } from 'react'
import styles from './IconButton.module.css'

export type IconButtonSurface = 'dark' | 'light' | 'translucent'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  surface?: IconButtonSurface
  /** Название иконки — только для подписи в Showcase, реальный SVG сюда не подключён (см. директиву) */
  iconName?: string
}

export function IconButton({ surface = 'dark', iconName, className, ...rest }: IconButtonProps) {
  const classes = [styles.iconButton, styles[surface], className].filter(Boolean).join(' ')
  return (
    <button className={classes} aria-label={iconName} {...rest}>
      <span className={styles.icon} aria-hidden />
    </button>
  )
}
