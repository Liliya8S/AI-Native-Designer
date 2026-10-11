import type { ButtonHTMLAttributes } from 'react'
import { Icon, type IconName } from '../Icon'
import styles from './IconButton.module.css'

export type IconButtonSurface = 'dark' | 'light' | 'translucent'

const ICON_SIZE: Record<IconButtonSurface, number> = {
  dark: 20,
  light: 16,
  translucent: 18,
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  surface?: IconButtonSurface
  iconName?: IconName
}

export function IconButton({ surface = 'dark', iconName, className, ...rest }: IconButtonProps) {
  const classes = [styles.iconButton, styles[surface], className].filter(Boolean).join(' ')
  return (
    <button className={classes} aria-label={iconName} {...rest}>
      {iconName ? <Icon name={iconName} size={ICON_SIZE[surface]} /> : <span className={styles.icon} aria-hidden />}
    </button>
  )
}
