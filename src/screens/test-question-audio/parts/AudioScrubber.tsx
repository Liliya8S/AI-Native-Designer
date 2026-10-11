import { Icon } from '../../../components'
import styles from './AudioScrubber.module.css'

/** Плеер озвучки вопроса поверх фото — только на этом экране (наложен абсолютным позиционированием, как в Figma). */
export function AudioScrubber() {
  return (
    <div className={styles.bar}>
      <span className={styles.redoButton}>
        <Icon name="redo" size={14} />
      </span>
      <div className={styles.mid}>
        <span className={styles.track} />
        <div className={styles.timeRow}>
          <span>0:11</span>
          <span>0:29</span>
        </div>
      </div>
      <span className={styles.pauseButton}>
        <Icon name="pause" size={14} />
      </span>
    </div>
  )
}
