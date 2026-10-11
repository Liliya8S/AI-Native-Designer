import { useNavigate } from 'react-router-dom'
import { Badge, ListItem } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import { AvatarRow } from './parts/AvatarRow'
import styles from './Profile.module.css'

const FAV_TOPICS = ['Приоритет · 96%', 'Разметка · 92%', 'Перекрёстки · 88%']
const REPEAT_TOPICS = ['Обгон · 12 ошибок', 'Скорость · 9 ошибок', 'Знаки · 7 ошибок']

export function Profile() {
  const navigate = useNavigate()
  return (
    <PhoneFrame>
      <div className={styles.header}>
        <span className={styles.title}>Профиль</span>
      </div>

      <AvatarRow name="Алексей Л." meta="Категория B · группа 214 · 12 день" />

      <div className={styles.progressSection}>
        <span className="ds-body-sm-medium">Мой прогресс</span>
        <div className={styles.progressCard}>
          <div className={styles.bareBar}>
            <div className={styles.bareBarHeader}>
              <span className="ds-body-xs">Билеты ПДД</span>
              <span className={`${styles.bareBarValueBlue} ds-label-xs`}>384 / 800</span>
            </div>
            <div className={styles.bareBarTrack}>
              <div className={styles.bareBarFillBlue} style={{ width: '48%' }} />
            </div>
          </div>
          <div className={styles.bareBar}>
            <div className={styles.bareBarHeader}>
              <span className="ds-body-xs">Вождение</span>
              <span className={`${styles.bareBarValueDark} ds-label-xs`}>3 / 14</span>
            </div>
            <div className={styles.bareBarTrack}>
              <div className={styles.bareBarFillDark} style={{ width: '21%' }} />
            </div>
          </div>
          <div className={styles.favTopics}>
            <span className={`${styles.favTitle} ds-label-xs`}>Любимые темы</span>
            <div className={styles.badgeRow}>
              {FAV_TOPICS.map((topic) => (
                <Badge key={topic} variant="white">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.repeatSection}>
        <span className="ds-body-sm-medium">Темы для повторения</span>
        <div className={styles.repeatCard}>
          {REPEAT_TOPICS.map((topic) => (
            <Badge key={topic} variant="accent">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      <div className={styles.menuWrap}>
        <ListItem icon="history-alt" label="История вождений" />
        <ListItem icon="setting" label="Настройки" />
        <ListItem icon="sign-out-alt" label="Выйти" style2="destructive" onClick={() => navigate('/')} />
      </div>

      <div className={styles.spacer} />

      <TabBar activeIndex={3} />
    </PhoneFrame>
  )
}
