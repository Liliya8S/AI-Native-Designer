import { useNavigate } from 'react-router-dom'
import { IconButton, type IconName } from '../../components'
import styles from './ViewfinderHeader.module.css'

export interface ViewfinderHeaderProps {
  title: string
  leftIconName?: IconName
  rightIconName?: IconName
}

/**
 * Шапка тёмных AR/камера-экранов: translucent IconButton × 2 + белый заголовок
 * по центру. Общая для 3a/3h. Левая кнопка (закрыть) ведёт назад по истории
 * переходов — экран может быть открыт с разных мест (с главной, с consent-шага),
 * поэтому «назад» универсальнее фиксированного маршрута.
 */
export function ViewfinderHeader({ title, leftIconName = 'times', rightIconName = 'setting' }: ViewfinderHeaderProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <IconButton surface="translucent" iconName={leftIconName} aria-label={leftIconName} onClick={() => navigate(-1)} />
      <span className={`${styles.title} ds-body-sm-medium`}>{title}</span>
      <IconButton surface="translucent" iconName={rightIconName} aria-label={rightIconName} />
    </div>
  )
}
