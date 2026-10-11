import type { ButtonHTMLAttributes } from 'react'
import { Icon, type IconName } from '../Icon'
import styles from './ListItem.module.css'

export type ListItemStyle = 'default' | 'destructive'

export interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  style2?: ListItemStyle
  icon?: IconName
  label: string
}

/** Проп называется `style2`, т.к. `style` зарезервирован под inline-стили в React */
export function ListItem({ style2 = 'default', icon, label, className, ...rest }: ListItemProps) {
  const classes = [styles.item, styles[style2], className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...rest}>
      {icon ? <Icon name={icon} size={18} /> : <span className={styles.icon} aria-hidden />}
      <span className={`${styles.label} ds-body-sm-medium`}>{label}</span>
    </button>
  )
}
