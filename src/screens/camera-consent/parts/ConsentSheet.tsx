import { useNavigate } from 'react-router-dom'
import { Button, Icon } from '../../../components'
import styles from './ConsentSheet.module.css'

/** Bottom-sheet согласия на хранение данных — только на этом экране. */
export function ConsentSheet() {
  const navigate = useNavigate()
  return (
    <div className={styles.sheet}>
      <div className={styles.titleRow}>
        <span className={styles.iconBox}>
          <span className={`${styles.corner} ${styles.topLeft}`} />
          <span className={`${styles.corner} ${styles.topRight}`} />
          <span className={`${styles.corner} ${styles.bottomLeft}`} />
          <span className={`${styles.corner} ${styles.bottomRight}`} />
          <Icon name="shield-check" size={22} />
        </span>
        <span className={`${styles.title} ds-heading-lg`}>Снимки хранятся только на устройстве</span>
      </div>
      <p className={`${styles.body} ds-body-xs`}>
        Кадры обрабатываются офлайн и не отправляются на сервер. История сканов доступна только вам и удаляется в
        настройках.
      </p>
      <div className={styles.buttons}>
        <Button variant="primary" onClick={() => navigate('/screens/ar-recognition')}>
          Понятно
        </Button>
        <Button variant="secondary">Открыть настройки</Button>
      </div>
    </div>
  )
}
