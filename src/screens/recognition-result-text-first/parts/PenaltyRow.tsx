import { Icon } from '../../../components'
import styles from './PenaltyRow.module.css'

export interface PenaltyRowProps {
  amount: string
  title: string
  reason: string
  law: string
}

/** Карточка штрафа — доменный блок результата распознавания, только здесь. */
export function PenaltyRow({ amount, title, reason, law }: PenaltyRowProps) {
  return (
    <div className={styles.row}>
      <Icon name="exclamation-triangle" size={36} className={styles.icon} />
      <div className={styles.textCol}>
        <div className={styles.amountCol}>
          <span className={styles.title}>{title}</span>
          <span className={styles.amount}>{amount}</span>
        </div>
        <div className={styles.lawLine}>
          <span className={styles.reason}>{reason}</span> <span className={styles.law}>· {law}</span>
        </div>
      </div>
    </div>
  )
}
