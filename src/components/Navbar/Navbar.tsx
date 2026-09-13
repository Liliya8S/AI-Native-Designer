import type { HTMLAttributes, ReactNode } from 'react'
import { IconButton } from '../IconButton'
import styles from './Navbar.module.css'

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  leftSlot?: ReactNode
  rightSlot?: ReactNode
}

export function Navbar({ title, leftSlot, rightSlot, className, ...rest }: NavbarProps) {
  const classes = [styles.navbar, className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {leftSlot ?? <IconButton surface="light" iconName="menu" />}
      <span className={`${styles.title} ds-body-sm-medium`}>{title}</span>
      {rightSlot ?? <IconButton surface="light" iconName="settings" />}
    </div>
  )
}
