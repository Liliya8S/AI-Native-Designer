import { Icon } from '../../../components'
import questionGiveWay from '../../../assets/photos/question-give-way.jpg'
import styles from './QuestionImage.module.css'

/** Фото ситуации на дороге + кнопка озвучки поверх. Локальная композиция — не часть базового QuestionCard. */
export function QuestionImage() {
  return (
    <div className={styles.wrap}>
      <img className={styles.photo} src={questionGiveWay} alt="" />
      <span className={styles.volumeButton}>
        <Icon name="volume-up" size={14} />
      </span>
    </div>
  )
}
