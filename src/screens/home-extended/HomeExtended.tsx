import { useNavigate } from 'react-router-dom'
import { Icon, Logo } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import { NotificationBell } from './parts/NotificationBell'
import styles from './HomeExtended.module.css'

const TOPICS_DONE = 3
const TOPICS_TOTAL = 15
const LESSONS_DONE = 3
const LESSONS_TOTAL = 14

const RING_RADIUS = 14
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

export function HomeExtended() {
  const navigate = useNavigate()
  const topicsProgress = TOPICS_DONE / TOPICS_TOTAL

  return (
    <PhoneFrame className={styles.frame}>
      <button className={styles.hero} type="button" onClick={() => navigate('/screens/camera-consent')}>
        <div className={styles.heroHeader}>
          <Logo
            onClick={(e) => e.stopPropagation()}
            style={{ color: '#5341B8', opacity: 0.4 }}
          />
          <NotificationBell />
        </div>
        <div className={styles.heroEyebrow}>
          <Icon name="camera-bold" size={18} />
          <span>AI-распознавание</span>
        </div>
        <div className={styles.heroTitle}>
          Сканировать
          <br />
          знак
        </div>
        <div className={styles.heroSub}>Ответ за 3 секунды</div>
        <span className={styles.heroButton}>Камера</span>
      </button>

      <div className={styles.blocks}>
        <div className={styles.tiles}>
          <button className={styles.tile} type="button" onClick={() => navigate('/screens/test-question')}>
            <span className={styles.tileTop}>
              <Icon name="clipboard-list-bold" size={22} />
              <span className={styles.tileChip}>15 тем</span>
            </span>
            <span className={styles.tileBottom}>
              <span className={styles.tileTitle}>Билеты ПДД</span>
              <span className={styles.tileSub}>Офлайн</span>
            </span>
          </button>
          <button className={styles.tile} type="button" onClick={() => navigate('/screens/instructor-booking')}>
            <span className={styles.tileTop}>
              <Icon name="calendar-bold" size={22} />
              <span className={styles.tileChip}>12 слотов</span>
            </span>
            <span className={styles.tileBottom}>
              <span className={styles.tileTitle}>Запись к инструктору</span>
            </span>
          </button>
        </div>

        <button className={styles.historyCard} type="button" onClick={() => navigate('/screens/recognition-result-text-first')}>
          <span className={styles.historyText}>
            <span className={styles.historyTitle}>История сканов</span>
            <span className={styles.tileSub}>Последний: Уступите дорогу · 14:20</span>
          </span>
          <Icon name="history-alt" size={20} />
        </button>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <svg className={styles.ring} viewBox="0 0 36 36">
              <circle cx="18" cy="18" r={RING_RADIUS} fill="none" stroke="#EEF0F2" strokeWidth="6" />
              <circle
                cx="18"
                cy="18"
                r={RING_RADIUS}
                fill="none"
                stroke="#A898F5"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${topicsProgress * RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`}
                transform="rotate(-90 18 18)"
              />
            </svg>
            <span className={styles.statText}>
              <span className={styles.statLabel}>Темы ПДД</span>
              <span className={styles.statValue}>
                {TOPICS_DONE} из {TOPICS_TOTAL}
              </span>
            </span>
          </div>
          <div className={styles.statCard}>
            <div className={styles.bars}>
              {[1, 1, 1, 0, 0].map((filled, i) => (
                <span key={i} className={`${styles.bar} ${filled ? styles.barFilled : ''}`} />
              ))}
            </div>
            <span className={styles.statText}>
              <span className={styles.statLabel}>Занятия</span>
              <span className={styles.statValue}>
                {LESSONS_DONE} из {LESSONS_TOTAL}
              </span>
            </span>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressRow}>
            Готов к экзамену на <span className={styles.percentChip}>48%</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: '48%' }} />
          </div>
        </div>
      </div>

      <div className={styles.spacer} />

      <TabBar activeIndex={0} />
    </PhoneFrame>
  )
}
