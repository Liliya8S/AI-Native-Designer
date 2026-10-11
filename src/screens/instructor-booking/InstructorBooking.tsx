import { useNavigate } from 'react-router-dom'
import { Button, TimeSlotRow } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import { MonthCalendar } from './parts/MonthCalendar'
import styles from './InstructorBooking.module.css'

const SLOTS = [
  { day: '16', weekday: 'Пн', time: '09:00 – 10:30', meta: 'Светлана В. · механика', state: 'default' as const },
  { day: '16', weekday: 'Пн', time: '11:00 – 12:30', meta: 'Дмитрий К. · автомат', state: 'selected' as const },
  { day: '16', weekday: 'Пн', time: '14:00 – 15:30', meta: 'Занято', state: 'disabled' as const },
]

export function InstructorBooking() {
  const navigate = useNavigate()
  return (
    <PhoneFrame>
      <div className={styles.calendarWrap}>
        <MonthCalendar month="Ноябрь 2026" />
      </div>

      <div className={styles.slotsWrap}>
        <div className={styles.slotsHeader}>
          <span className="ds-body-sm-medium">Свободное время</span>
          <span className={`${styles.slotsDate} ds-body-xs`}>16 ноября</span>
        </div>
        {SLOTS.map((slot, i) => (
          <TimeSlotRow key={i} day={slot.day} weekday={slot.weekday} time={slot.time} meta={slot.meta} state={slot.state} />
        ))}
      </div>

      <div className={styles.spacer} />

      <div className={styles.footer}>
        <span className={`${styles.footerCaption} ds-body-xs`}>Отмена бесплатно за 12 часов до занятия</span>
        <Button
          variant="primary"
          className={styles.bookButton}
          onClick={() => navigate('/screens/my-lessons')}
        >
          Забронировать
        </Button>
      </div>
      <TabBar activeIndex={2} />
    </PhoneFrame>
  )
}
