import { useNavigate } from 'react-router-dom'
import { Button, Icon, LessonRow } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import { DateNavigator } from './parts/DateNavigator'
import photoSvetlana from '../../assets/photos/instructor-svetlana.jpg'
import photoDmitry from '../../assets/photos/instructor-dmitry.jpg'
import photoIgor from '../../assets/photos/instructor-igor.jpg'
import styles from './MyLessons.module.css'

const LESSONS = [
  { status: 'past' as const, initials: 'СВ', photoSrc: photoSvetlana, time: '09:00 – 10:30', meta: 'Светлана В. · Solaris, механика' },
  { status: 'today' as const, initials: 'ДК', photoSrc: photoDmitry, time: '11:00 – 12:30', meta: 'Дмитрий К. · Rio, автомат' },
  { status: 'upcoming' as const, initials: 'ИГ', photoSrc: photoIgor, time: '17:00 – 18:30', meta: 'Игорь Г. · Polo, механика' },
]

export function MyLessons() {
  const navigate = useNavigate()
  return (
    <PhoneFrame className={styles.frame}>
      <div className={styles.navWrap}>
        <DateNavigator month="Сентябрь 2026" lessonsCount="3 занятия" day="15" />
      </div>

      <div className={styles.lessonsList}>
        {LESSONS.map((lesson) => (
          <LessonRow
            key={lesson.initials}
            status={lesson.status}
            initials={lesson.initials}
            photoSrc={lesson.photoSrc}
            time={lesson.time}
            meta={lesson.meta}
          />
        ))}
      </div>

      <div className={styles.upcomingWrap}>
        <span className="ds-body-sm-medium">Ближайшее занятие</span>
        <div className={styles.upcomingCard}>
          <div className={styles.upcomingRow}>
            <Icon name="clock" size={14} />
            <span className={`${styles.upcomingTime} ds-body-sm-medium`}>Через 2 часа · 11:00</span>
          </div>
          <span className={`${styles.upcomingDesc} ${styles.upcomingTopic} ds-body-xs`}>Разворот в ограниченном пространстве.</span>
          <div className={styles.upcomingRow}>
            <Icon name="map-marker" size={14} />
            <span className={`${styles.upcomingDesc} ds-body-xs`}>Место встречи — ул. Лесная, 14.</span>
          </div>
        </div>
      </div>

      <div className={styles.spacer} />

      <div className={styles.footer}>
        <Button
          variant="primary"
          className={styles.bookMoreButton}
          onClick={() => navigate('/screens/instructor-booking')}
        >
          Записаться ещё
        </Button>
      </div>
      <TabBar activeIndex={2} />
    </PhoneFrame>
  )
}
