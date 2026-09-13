// Иконки — Unicons by Iconscout (стиль Line), тот же набор, что скопирован
// вручную во фрейм «Line» на странице Components в Figma (см. ds/CONTRACT.md).
// Экспортированы как raw-SVG (?raw) с fill="currentColor", чтобы цвет
// наследовался из CSS через семантические токены, как у всех остальных
// компонентов базы.
import times from '../../assets/icons/times.svg?raw'
import volumeUp from '../../assets/icons/volume-up.svg?raw'
import arrowLeft from '../../assets/icons/arrow-left.svg?raw'
import setting from '../../assets/icons/setting.svg?raw'
import signOutAlt from '../../assets/icons/sign-out-alt.svg?raw'
import historyAlt from '../../assets/icons/history-alt.svg?raw'
import calendarAlt from '../../assets/icons/calendar-alt.svg?raw'
import home from '../../assets/icons/home.svg?raw'
import user from '../../assets/icons/user.svg?raw'
import clipboardNotes from '../../assets/icons/clipboard-notes.svg?raw'
import check from '../../assets/icons/check.svg?raw'
import camera from '../../assets/icons/camera.svg?raw'
import bell from '../../assets/icons/bell.svg?raw'
import search from '../../assets/icons/search.svg?raw'
import lock from '../../assets/icons/lock.svg?raw'
import angleRight from '../../assets/icons/angle-right.svg?raw'
import angleLeft from '../../assets/icons/angle-left.svg?raw'
import exclamationCircle from '../../assets/icons/exclamation-circle.svg?raw'
import exclamationTriangle from '../../assets/icons/exclamation-triangle.svg?raw'
import infoCircle from '../../assets/icons/info-circle.svg?raw'
import checkCircle from '../../assets/icons/check-circle.svg?raw'
import busSchool from '../../assets/icons/bus-school.svg?raw'
import redo from '../../assets/icons/redo.svg?raw'
import shieldCheck from '../../assets/icons/shield-check.svg?raw'
import pause from '../../assets/icons/pause.svg?raw'
import images from '../../assets/icons/images.svg?raw'
import bolt from '../../assets/icons/bolt.svg?raw'
import questionCircle from '../../assets/icons/question-circle.svg?raw'

export const icons = {
  times,
  'volume-up': volumeUp,
  'arrow-left': arrowLeft,
  setting,
  'sign-out-alt': signOutAlt,
  'history-alt': historyAlt,
  'calendar-alt': calendarAlt,
  home,
  user,
  'clipboard-notes': clipboardNotes,
  check,
  camera,
  bell,
  search,
  lock,
  'angle-right': angleRight,
  'angle-left': angleLeft,
  'exclamation-circle': exclamationCircle,
  'exclamation-triangle': exclamationTriangle,
  'info-circle': infoCircle,
  'check-circle': checkCircle,
  'bus-school': busSchool,
  redo,
  'shield-check': shieldCheck,
  pause,
  images,
  bolt,
  'question-circle': questionCircle,
} as const

export type IconName = keyof typeof icons
