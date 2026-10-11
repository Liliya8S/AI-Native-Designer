import avatarMale from '../../../assets/photos/avatar-male.jpg'
import styles from './AvatarRow.module.css'

export interface AvatarRowProps {
  name: string
  meta: string
}

/** Фото-аватар + имя + мета-строка — только на этом экране. */
export function AvatarRow({ name, meta }: AvatarRowProps) {
  return (
    <div className={styles.row}>
      <img className={styles.avatar} src={avatarMale} alt="" />
      <div className={styles.textCol}>
        <span className="ds-heading-lg">{name}</span>
        <span className={`${styles.meta} ds-body-xs`}>{meta}</span>
      </div>
    </div>
  )
}
