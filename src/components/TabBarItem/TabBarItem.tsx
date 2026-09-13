import type { ButtonHTMLAttributes } from 'react'
import styles from './TabBarItem.module.css'

export interface TabBarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  label: string
}

export function TabBarItem({ active = false, label, className, ...rest }: TabBarItemProps) {
  const classes = [styles.item, active ? styles.active : '', className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...rest}>
      <span className={styles.icon} aria-hidden />
      <span className="ds-label-xs">{label}</span>
    </button>
  )
}
