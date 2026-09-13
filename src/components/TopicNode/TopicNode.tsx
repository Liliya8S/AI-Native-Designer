import type { HTMLAttributes } from 'react'
import styles from './TopicNode.module.css'

export type TopicNodeState = 'locked' | 'available' | 'completed'

export interface TopicNodeProps extends HTMLAttributes<HTMLDivElement> {
  state?: TopicNodeState
  label: string
}

export function TopicNode({ state = 'available', label, className, ...rest }: TopicNodeProps) {
  const classes = [styles.node, styles[state], className].filter(Boolean).join(' ')
  return (
    <div className={classes} {...rest}>
      <span className={styles.indicatorWrap}>
        <span className={styles.indicator} aria-hidden />
        {state === 'locked' && <span className={styles.lockIcon} aria-hidden />}
      </span>
      <span className={`${styles.label} ds-body-sm-medium`}>{label}</span>
    </div>
  )
}
