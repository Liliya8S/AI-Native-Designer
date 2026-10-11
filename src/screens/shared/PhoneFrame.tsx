import type { ReactNode } from 'react'
import styles from './PhoneFrame.module.css'

export interface PhoneFrameProps {
  darkStatusBar?: boolean
  className?: string
  children: ReactNode
}

/**
 * Общий каркас экрана: StatusBar/HomeIndicator — это OS-хром из Apple UI Kit
 * (см. ds/CONTRACT.md), не часть продуктовой ДС, поэтому живёт здесь, а не в
 * src/components/. Повторяется на всех экранах из Design Import v2, вынесен
 * сразу, а не после 3+ копий.
 */
export function PhoneFrame({ darkStatusBar = false, className = '', children }: PhoneFrameProps) {
  return (
    <div className={`${styles.frame} ${darkStatusBar ? styles.darkFrame : ''} ${className}`}>
      <div className={`${styles.statusBar} ${darkStatusBar ? styles.dark : ''}`}>
        <span className={styles.statusSide}>
          <span className={styles.time}>9:41</span>
        </span>
        <span className={styles.islandPill} aria-hidden />
        <span className={`${styles.statusSide} ${styles.statusSideRight}`} aria-hidden />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.homeIndicatorBar}>
        <span className={`${styles.homeIndicatorPill} ${darkStatusBar ? styles.pillLight : ''}`} aria-hidden />
      </div>
    </div>
  )
}
