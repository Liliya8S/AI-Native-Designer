import { Icon } from '../../../components'
import styles from './ScanFrame.module.css'

/** Рамка-гид с угловыми скобками + иконка камеры + подпись загрузки. Только на этом экране. */
export function ScanFrame() {
  return (
    <div className={styles.wrap}>
      <div className={styles.corners}>
        <span className={`${styles.corner} ${styles.topLeft}`} />
        <span className={`${styles.corner} ${styles.topRight}`} />
        <span className={`${styles.corner} ${styles.bottomLeft}`} />
        <span className={`${styles.corner} ${styles.bottomRight}`} />
        <Icon name="camera" size={26} className={styles.camIcon} />
      </div>
      <span className={`${styles.caption} ds-body-xs`}>Камера запускается</span>
    </div>
  )
}
