import { Link } from 'react-router-dom'
import { screens } from './registry'
import styles from './Index.module.css'

export function ScreensIndex() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className="ds-heading-2xl">ПДД Ассистент — экраны</h1>
        <p className={`${styles.subtitle} ds-body-sm`}>
          Статичные экраны, собранные из дизайн-системы. Логика и данные — отдельный шаг.
        </p>
      </div>

      <div className={styles.grid}>
        {screens.map((screen) => (
          <Link key={screen.id} to={screen.route} className={styles.tile}>
            <span className="ds-heading-lg">{screen.name}</span>
            <span className={`${styles.description} ds-body-xs`}>{screen.description}</span>
            <span className={`${styles.route} ds-label-xs`}>{screen.route}</span>
          </Link>
        ))}
      </div>

      <a className={`${styles.storybookLink} ds-body-sm`} href="http://localhost:6006" target="_blank" rel="noreferrer">
        Открыть каталог компонентов (Storybook) →
      </a>
    </div>
  )
}
