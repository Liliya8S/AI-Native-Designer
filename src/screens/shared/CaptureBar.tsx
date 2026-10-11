import { Icon } from '../../components'
import styles from './CaptureBar.module.css'

export interface CaptureBarProps {
  /** Без обработчика затвор неактивен (например, пока камера ещё запускается на 3h). */
  onCapture?: () => void
}

/**
 * Нижняя панель камеры: превью последнего скана + кнопка-затвор + redo.
 * Не компонент ДС (см. ds/screens/_index.md — "кандидат на будущий
 * grow_ui_kit"), поэтому живёт в screens/shared, а не в src/components/.
 * Общая для 3a и 3h.
 */
export function CaptureBar({ onCapture }: CaptureBarProps) {
  return (
    <div className={styles.bar}>
      <span className={styles.lastScanThumb} aria-hidden />
      <button className={styles.shutter} type="button" disabled={!onCapture} onClick={onCapture} aria-label="Сделать снимок">
        <span className={styles.shutterInner} />
      </button>
      <span className={styles.redoWrap}>
        <Icon name="redo" size={20} />
      </span>
    </div>
  )
}
