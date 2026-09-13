import type { HTMLAttributes } from 'react'
import styles from './OverlayChip.module.css'

export type OverlayChipProps = HTMLAttributes<HTMLSpanElement>

export function OverlayChip({ className, children, ...rest }: OverlayChipProps) {
  const classes = [styles.chip, 'ds-body-sm-medium', className].filter(Boolean).join(' ')
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  )
}
