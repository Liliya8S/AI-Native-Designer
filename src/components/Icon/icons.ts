// Иконки: Solar Bold (https://solar-icons.vercel.app, MIT) — стиль выбран для всего интерфейса.
// Классические шевроны (angle-left/angle-right) и стрелка назад (arrow-left) — Unicons,
// чтобы навигация оставалась без треугольных «alt-arrow» форм.
import timesIcon from '../../assets/icons/solar/close.svg?raw'
import volumeUpIcon from '../../assets/icons/solar/volume-loud.svg?raw'
import settingIcon from '../../assets/icons/solar/settings.svg?raw'
import signOutAltIcon from '../../assets/icons/solar/logout.svg?raw'
import historyAltIcon from '../../assets/icons/solar/clock-circle.svg?raw'
import calendarAltIcon from '../../assets/icons/solar/calendar.svg?raw'
import homeIcon from '../../assets/icons/solar/home.svg?raw'
import userIcon from '../../assets/icons/solar/user.svg?raw'
import clipboardNotesIcon from '../../assets/icons/solar/clipboard-list.svg?raw'
import checkIcon from '../../assets/icons/solar/check.svg?raw'
import cameraIcon from '../../assets/icons/solar/camera.svg?raw'
import bellIcon from '../../assets/icons/solar/bell.svg?raw'
import searchIcon from '../../assets/icons/solar/magnifier.svg?raw'
import lockIcon from '../../assets/icons/solar/lock.svg?raw'
import exclamationCircleIcon from '../../assets/icons/solar/danger-circle.svg?raw'
import exclamationTriangleIcon from '../../assets/icons/solar/danger-triangle.svg?raw'
import infoCircleIcon from '../../assets/icons/solar/info-circle.svg?raw'
import checkCircleIcon from '../../assets/icons/solar/check-circle.svg?raw'
import busSchoolIcon from '../../assets/icons/solar/bus.svg?raw'
import redoIcon from '../../assets/icons/solar/restart.svg?raw'
import shieldCheckIcon from '../../assets/icons/solar/shield-check.svg?raw'
import pauseIcon from '../../assets/icons/solar/pause.svg?raw'
import imagesIcon from '../../assets/icons/solar/gallery.svg?raw'
import boltIcon from '../../assets/icons/solar/bolt.svg?raw'
import questionCircleIcon from '../../assets/icons/solar/question-circle.svg?raw'
import barsIcon from '../../assets/icons/solar/hamburger-menu.svg?raw'
import clockIcon from '../../assets/icons/solar/clock-circle.svg?raw'
import mapMarkerIcon from '../../assets/icons/solar/map-point.svg?raw'
import cameraBoldIcon from '../../assets/icons/solar/camera.svg?raw'
import clipboardListBoldIcon from '../../assets/icons/solar/clipboard-list.svg?raw'
import calendarBoldIcon from '../../assets/icons/solar/calendar.svg?raw'
import bellBoldIcon from '../../assets/icons/solar/bell.svg?raw'
import homeBoldIcon from '../../assets/icons/solar/home.svg?raw'
import userBoldIcon from '../../assets/icons/solar/user.svg?raw'
import closeBoldIcon from '../../assets/icons/solar/close.svg?raw'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg?raw'
import angleLeftIcon from '../../assets/icons/angle-left.svg?raw'
import angleRightIcon from '../../assets/icons/angle-right.svg?raw'

export const icons = {
  'times': timesIcon,
  'volume-up': volumeUpIcon,
  'setting': settingIcon,
  'sign-out-alt': signOutAltIcon,
  'history-alt': historyAltIcon,
  'calendar-alt': calendarAltIcon,
  'home': homeIcon,
  'user': userIcon,
  'clipboard-notes': clipboardNotesIcon,
  'check': checkIcon,
  'camera': cameraIcon,
  'bell': bellIcon,
  'search': searchIcon,
  'lock': lockIcon,
  'exclamation-circle': exclamationCircleIcon,
  'exclamation-triangle': exclamationTriangleIcon,
  'info-circle': infoCircleIcon,
  'check-circle': checkCircleIcon,
  'bus-school': busSchoolIcon,
  'redo': redoIcon,
  'shield-check': shieldCheckIcon,
  'pause': pauseIcon,
  'images': imagesIcon,
  'bolt': boltIcon,
  'question-circle': questionCircleIcon,
  'bars': barsIcon,
  'clock': clockIcon,
  'map-marker': mapMarkerIcon,
  'camera-bold': cameraBoldIcon,
  'clipboard-list-bold': clipboardListBoldIcon,
  'calendar-bold': calendarBoldIcon,
  'bell-bold': bellBoldIcon,
  'home-bold': homeBoldIcon,
  'user-bold': userBoldIcon,
  'close-bold': closeBoldIcon,
  'arrow-left': arrowLeftIcon,
  'angle-left': angleLeftIcon,
  'angle-right': angleRightIcon,
} as const

export type IconName = keyof typeof icons
