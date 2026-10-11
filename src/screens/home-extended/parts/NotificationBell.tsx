import { Icon } from '../../../components'
import styles from './NotificationBell.module.css'

/** Иконка колокольчика с индикатором непрочитанных — локальная композиция, не Icon-Button (нет фона-поверхности). */
export function NotificationBell() {
  return (
    <span className={styles.wrap}>
      <Icon name="bell-bold" size={16} />
      <span className={styles.dot} aria-hidden />
    </span>
  )
}
