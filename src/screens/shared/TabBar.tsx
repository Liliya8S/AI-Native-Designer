import { useNavigate } from 'react-router-dom'
import { Icon, TabBarItem } from '../../components'
import { TABS } from './tabs'
import styles from './TabBar.module.css'

export interface TabBarProps {
  activeIndex: number
}

/** Нижняя навигация (Главная/Билеты/[Сканировать]/Занятия/Профиль) — общая для всех экранов с таб-баром.
 * Кнопка «Сканировать» — не пункт TABS (нет своего activeIndex/роута в общем списке), а отдельная
 * приподнятая круглая кнопка по центру, вставленная между 2-м и 3-м пунктом — по референсу пользователя. */
export function TabBar({ activeIndex }: TabBarProps) {
  const navigate = useNavigate()
  const [leftTabs, rightTabs] = [TABS.slice(0, 2), TABS.slice(2)]
  return (
    <div className={styles.tabBar}>
      {leftTabs.map((tab, i) => (
        <TabBarItem
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          active={i === activeIndex}
          onClick={() => navigate(tab.route)}
        />
      ))}
      <button
        className={styles.scanButton}
        type="button"
        aria-label="Сканировать"
        onClick={() => navigate('/screens/camera-consent')}
      >
        <Icon name="camera-bold" size={18} />
      </button>
      {rightTabs.map((tab, i) => (
        <TabBarItem
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          active={i + 2 === activeIndex}
          onClick={() => navigate(tab.route)}
        />
      ))}
    </div>
  )
}
