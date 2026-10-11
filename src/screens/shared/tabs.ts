import type { IconName } from '../../components'

export interface TabDef {
  label: string
  icon: IconName
  route: string
}

/** Единый список нижней навигации — переиспользуется всеми экранами с TabBar. */
export const TABS: TabDef[] = [
  { label: 'Главная', icon: 'home-bold', route: '/screens/home-extended' },
  { label: 'Билеты', icon: 'clipboard-list-bold', route: '/screens/test-question' },
  { label: 'Занятия', icon: 'calendar-bold', route: '/screens/my-lessons' },
  { label: 'Профиль', icon: 'user-bold', route: '/screens/profile' },
]
