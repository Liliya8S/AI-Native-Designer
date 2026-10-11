import type { ComponentType } from 'react'
import { lazy } from 'react'

export interface ScreenEntry {
  id: string
  name: string
  description: string
  route: string
  component: ComponentType
}

const HomeExtended = lazy(() => import('./home-extended/HomeExtended').then((m) => ({ default: m.HomeExtended })))
const ArRecognition = lazy(() => import('./ar-recognition/ArRecognition').then((m) => ({ default: m.ArRecognition })))
const CameraConsent = lazy(() => import('./camera-consent/CameraConsent').then((m) => ({ default: m.CameraConsent })))
const TestQuestion = lazy(() => import('./test-question/TestQuestion').then((m) => ({ default: m.TestQuestion })))
const TestQuestionAudio = lazy(() =>
  import('./test-question-audio/TestQuestionAudio').then((m) => ({ default: m.TestQuestionAudio })),
)
const InstructorBooking = lazy(() =>
  import('./instructor-booking/InstructorBooking').then((m) => ({ default: m.InstructorBooking })),
)
const MyLessons = lazy(() => import('./my-lessons/MyLessons').then((m) => ({ default: m.MyLessons })))
const Profile = lazy(() => import('./profile/Profile').then((m) => ({ default: m.Profile })))
const RecognitionResultTextFirst = lazy(() =>
  import('./recognition-result-text-first/RecognitionResultTextFirst').then((m) => ({
    default: m.RecognitionResultTextFirst,
  })),
)

export const screens: ScreenEntry[] = [
  {
    id: 'home-extended',
    name: '3c · Главная с разделами',
    description: 'Hero-CTA сканера, карточки «Билеты ПДД»/«Запись к инструктору», общий прогресс, недавние сканы, нижняя навигация',
    route: '/screens/home-extended',
    component: HomeExtended,
  },
  {
    id: 'ar-recognition',
    name: '3a · Распознавание AR',
    description: 'AR-видоискатель с live-детекцией знаков, подписи поверх камеры, переключатель Распознавание/Обучение, панель съёмки',
    route: '/screens/ar-recognition',
    component: ArRecognition,
  },
  {
    id: 'camera-consent',
    name: '3h · Запуск камеры · алерт о данных',
    description: 'Видоискатель запускается, рамка-гид с иконкой камеры, поверх — bottom sheet согласия на хранение снимков',
    route: '/screens/camera-consent',
    component: CameraConsent,
  },
  {
    id: 'test-question',
    name: '3b · Вопрос теста',
    description: 'Карточка вопроса теста: фото ситуации, вопрос, 4 варианта ответа, кнопка «Продолжить», футер с прогрессом',
    route: '/screens/test-question',
    component: TestQuestion,
  },
  {
    id: 'test-question-audio',
    name: '3g · Вопрос теста · озвучка играет',
    description: 'Тот же вопрос теста, но с плеером озвучки поверх фото — редко/пауза, шкала прогресса, тайм-коды',
    route: '/screens/test-question-audio',
    component: TestQuestionAudio,
  },
  {
    id: 'instructor-booking',
    name: '3d · Запись к инструктору',
    description: 'Календарь-месяц с выбором дня, список свободных слотов (default/selected/disabled), кнопка «Забронировать»',
    route: '/screens/instructor-booking',
    component: InstructorBooking,
  },
  {
    id: 'my-lessons',
    name: '3e · Мои занятия',
    description: 'Навигатор по дню, список занятий (past/today/upcoming), карточка ближайшего занятия, «Записаться ещё»',
    route: '/screens/my-lessons',
    component: MyLessons,
  },
  {
    id: 'profile',
    name: '3f · Профиль',
    description: 'Аватар, прогресс (билеты/вождение) с любимыми темами, темы для повторения, меню настроек, нижняя навигация',
    route: '/screens/profile',
    component: Profile,
  },
  {
    id: 'recognition-result-text-first',
    name: '4a · Результат (текст-первым)',
    description: 'Бейджи уверенности/категории, заголовок-результат, фото, штраф-чип, InlineAlert-подсказка, действия',
    route: '/screens/recognition-result-text-first',
    component: RecognitionResultTextFirst,
  },
]
