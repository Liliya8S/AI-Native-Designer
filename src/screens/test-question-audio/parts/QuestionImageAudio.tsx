import { Icon } from '../../../components'
import intersectionScene from '../../../assets/photos/intersection-diagram-tram-h.jpg'
import { AudioScrubber } from './AudioScrubber'
import styles from './QuestionImageAudio.module.css'

export interface QuestionImageAudioProps {
  /** Плеер открыт (озвучка играет) — показывает `AudioScrubber` вместо кнопки озвучки. */
  open: boolean
  onOpen: () => void
}

/**
 * Фото ситуации + плеер озвучки поверх. Локальная композиция — не часть базового QuestionCard.
 * Два состояния (Figma: 3g «озвучка играет» / 3g-1 «озвучка не играет») — до клика на кнопку озвучки
 * показывается только круглая кнопка (как на 3b), после клика разворачивается `AudioScrubber`.
 */
export function QuestionImageAudio({ open, onOpen }: QuestionImageAudioProps) {
  return (
    <div className={styles.wrap}>
      <img className={styles.photo} src={intersectionScene} alt="" />
      {open ? (
        <AudioScrubber />
      ) : (
        <button className={styles.volumeButton} type="button" onClick={onOpen} aria-label="Включить озвучку">
          <Icon name="volume-up" size={14} />
        </button>
      )}
    </div>
  )
}
