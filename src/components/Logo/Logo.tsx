import type { HTMLAttributes } from 'react'
import styles from './Logo.module.css'

export type LogoProps = HTMLAttributes<HTMLDivElement>

/** Логотип продукта: «DRIVER» и метка «AI» шрифтом Unbounded — шапка главного экрана. */
export function Logo({ className, ...rest }: LogoProps) {
  const classes = [styles.wrap, className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.name}>DRIVER</span>
      <span className={styles.ai}>AI</span>
    </div>
  )
}
