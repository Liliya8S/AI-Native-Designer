import { Icon } from '../../../components'
import styles from './DateNavigator.module.css'

export interface DateNavigatorProps {
  month: string
  lessonsCount: string
  day: string
}

/** Навигатор по дню месяца с количеством занятий — только на этом экране. */
export function DateNavigator({ month, lessonsCount, day }: DateNavigatorProps) {
  return (
    <div className={styles.nav}>
      <div className={`${styles.top} ds-body-xs`}>
        <span className={styles.month}>{month}</span>
        <span className={styles.count}>{lessonsCount}</span>
      </div>
      <div className={styles.mid}>
        <Icon name="angle-left" size={16} className={styles.arrow} />
        <span className={styles.dayBox}>{day}</span>
        <Icon name="angle-right" size={16} className={styles.arrow} />
      </div>
    </div>
  )
}
