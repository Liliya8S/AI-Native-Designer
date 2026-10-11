import type { ButtonHTMLAttributes } from 'react'
import { Icon, type IconName } from '../Icon'
import styles from './TabBarItem.module.css'

export interface TabBarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: IconName
  label: string
}

export function TabBarItem({ active = false, icon, label, className, ...rest }: TabBarItemProps) {
  const classes = [styles.item, active ? styles.active : '', className].filter(Boolean).join(' ')
  return (
    <button className={classes} aria-label={label} {...rest}>
      {icon ? <Icon name={icon} size={22} /> : <span className={styles.icon} aria-hidden />}
    </button>
  )
}
