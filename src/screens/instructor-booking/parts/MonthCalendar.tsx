import { Icon } from '../../../components'
import styles from './MonthCalendar.module.css'

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

interface CalendarDay {
  day: number
  muted?: boolean
  selected?: boolean
}

const WEEKS: CalendarDay[][] = [
  [
    { day: 26, muted: true },
    { day: 27, muted: true },
    { day: 28, muted: true },
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 31, muted: true },
    { day: 1 },
  ],
  [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }],
  [{ day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }],
  [{ day: 16, selected: true }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }],
  [{ day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }],
]

export interface MonthCalendarProps {
  month: string
}

/** Календарь-месяц с выбором дня — только на этом экране (не компонент ДС). */
export function MonthCalendar({ month }: MonthCalendarProps) {
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <Icon name="angle-left" size={16} className={styles.nav} />
        <span className="ds-body-sm-medium">{month}</span>
        <Icon name="angle-right" size={16} className={styles.nav} />
      </div>
      <div className={`${styles.weekdays} ds-label-xs`}>
        {WEEKDAYS.map((wd) => (
          <span key={wd}>{wd}</span>
        ))}
      </div>
      {WEEKS.map((week, i) => (
        <div key={i} className={styles.week}>
          {week.map((cell) => (
            <span
              key={cell.day + '-' + i}
              className={`${styles.day} ds-body-sm-medium ${cell.selected ? styles.selected : ''} ${cell.muted ? styles.muted : ''}`}
            >
              {cell.day}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
