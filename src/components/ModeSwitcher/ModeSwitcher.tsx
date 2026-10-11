import type { HTMLAttributes } from 'react'
import styles from './ModeSwitcher.module.css'

export interface ModeSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  modes: string[]
  activeIndex?: number
}

/**
 * Pill-переключатель режима (сплошная заливка на активном). Не `Tabs` — другая
 * анатомия (нет underline-индикатора), см. `ds/screens/_index.md`. Рассчитан на
 * тёмную/фото-подложку (AR-видоискатель) — полупрозрачные белые пилюли.
 */
export function ModeSwitcher({ modes, activeIndex = 0, className, ...rest }: ModeSwitcherProps) {
  const classes = [styles.row, className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      {modes.map((mode, i) => (
        <span key={mode} className={`${styles.pill} ${i === activeIndex ? styles.active : ''} ds-body-xs`}>
          {mode}
        </span>
      ))}
    </div>
  )
}
