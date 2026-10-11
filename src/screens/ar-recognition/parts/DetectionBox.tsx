import type { CSSProperties } from 'react'
import styles from './DetectionBox.module.css'

export interface DetectionBoxProps {
  size: number
  top: number
  left: number
  label?: string
}

/** Рамка live-детекции знака поверх видоискателя — только на этом экране. */
export function DetectionBox({ size, top, left, label }: DetectionBoxProps) {
  const style: CSSProperties = { width: size, height: size, top, left }
  return (
    <div className={styles.box} style={style}>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}
