import type { ReactNode } from 'react'
import { Button } from '../Button'
import styles from './Modal.module.css'

export interface ModalProps {
  open: boolean
  title: ReactNode
  children?: ReactNode
  primaryLabel?: string
  secondaryLabel?: string
  onPrimary?: () => void
  onSecondary?: () => void
  onClose?: () => void
}

export function Modal({
  open,
  title,
  children,
  primaryLabel = 'Подтвердить',
  secondaryLabel = 'Отмена',
  onPrimary,
  onSecondary,
  onClose,
}: ModalProps) {
  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={`${styles.title} ds-heading-lg`}>{title}</span>
          <button className={styles.close} onClick={onClose} aria-label="Закрыть">
            ✕
          </button>
        </div>
        {children && <p className={`${styles.body} ds-body-sm`}>{children}</p>}
        <div className={styles.footer}>
          <Button variant="secondary" onClick={onSecondary}>
            {secondaryLabel}
          </Button>
          <Button variant="primary" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
