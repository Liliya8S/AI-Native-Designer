import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, type IconName } from '../../components'
import styles from './ScreenHeaderLight.module.css'

export interface ScreenHeaderLightProps {
  /** Без заголовка — минимальная шапка: только иконка(и), без спейсера-балансира (Фаза, по запросу «убрать Header»). */
  title?: string
  leftIconName?: IconName
  rightSlot?: ReactNode
}

/**
 * Шапка светлых экранов: back-стрелка (IconButton surface=light) + опциональный
 * заголовок по центру + опциональный правый слот. С заголовком — балансирующий
 * спейсер 40×40 держит текст по центру; без заголовка — просто иконка(и), без
 * спейсера (баланс не нужен без текста для центрирования). Стрелка ведёт назад
 * по истории переходов — универсальнее фиксированного маршрута.
 */
export function ScreenHeaderLight({ title, leftIconName = 'angle-left', rightSlot }: ScreenHeaderLightProps) {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <IconButton surface="light" iconName={leftIconName} aria-label={leftIconName} onClick={() => navigate(-1)} />
      {title && <span className={`${styles.title} ds-body-sm-medium`}>{title}</span>}
      {title ? (rightSlot ?? <span className={styles.spacer40} aria-hidden />) : rightSlot}
    </div>
  )
}
