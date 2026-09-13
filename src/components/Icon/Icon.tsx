import type { HTMLAttributes } from 'react'
import { icons, type IconName } from './icons'
import styles from './Icon.module.css'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName
  size?: number
}

/**
 * Реальная иконка из набора Unicons (Line) — того же, что скопирован в Figma
 * (см. ds/CONTRACT.md). Красится через CSS `color` (SVG использует
 * fill="currentColor"), поэтому обычно достаточно обернуть в элемент с
 * нужным семантическим text-* токеном.
 */
export function Icon({ name, size = 20, className, style, ...rest }: IconProps) {
  const classes = [styles.icon, className].filter(Boolean).join(' ')
  return (
    <span
      className={classes}
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
      {...rest}
    />
  )
}

export const ICON_NAMES = Object.keys(icons) as IconName[]
