import { useNavigate } from 'react-router-dom'
import { Badge, Button } from '../../components'
import { PhoneFrame } from '../shared/PhoneFrame'
import { TabBar } from '../shared/TabBar'
import intersectionScene from '../../assets/photos/intersection-diagram-tram-h.jpg'
import { PenaltyRow } from './parts/PenaltyRow'
import styles from './RecognitionResultTextFirst.module.css'

export function RecognitionResultTextFirst() {
  const navigate = useNavigate()
  return (
    <PhoneFrame>
      <div className={styles.body}>
        <div className={styles.badgesRow}>
          <Badge variant="neutral">Знак распознан · 98%</Badge>
          <Badge variant="neutral">Знак 2.4 · Приоритет</Badge>
        </div>

        <span className={styles.heading}>Уступите дорогу на пешеходном переходе</span>

        <img className={styles.photoPreview} src={intersectionScene} alt="" />

        <p className={styles.description}>
          Вы обязаны уступить дорогу транспорту на главной дороге и трамваю независимо от направления движения.
          Остановка не нужна, если нет помех — снизьте скорость и продолжайте движение.
        </p>

        <PenaltyRow amount="5 000 ₽" title="Штраф" reason="Не уступил дорогу" law="ст. 12.13 КоАП" />

        <a className={styles.hintLink} href="#more" onClick={(e) => e.preventDefault()}>
          Этот знак часто путают со знаком «Проезд без остановки запрещён» <span className={styles.hintMore}>→ Подробнее</span>
        </a>
      </div>

      <div className={styles.spacer} />

      <div className={styles.actionsRow}>
        <Button
          variant="secondary"
          className={styles.actionButton}
          onClick={() => navigate('/screens/ar-recognition')}
        >
          Пересъёмка
        </Button>
        <Button
          variant="primary"
          className={styles.actionButton}
          onClick={() => navigate('/screens/test-question')}
        >
          К повторению
        </Button>
      </div>
      <TabBar activeIndex={0} />
    </PhoneFrame>
  )
}
