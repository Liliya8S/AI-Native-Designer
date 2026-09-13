import styles from './Tabs.module.css'

export interface TabsProps {
  items: string[]
  activeIndex?: number
  onChange?: (index: number) => void
}

export function Tabs({ items, activeIndex = 0, onChange }: TabsProps) {
  return (
    <div className={styles.tabs}>
      {items.map((item, i) => (
        <button
          key={item}
          className={`${styles.tab} ${i === activeIndex ? styles.active : ''} ds-body-sm-medium`}
          onClick={() => onChange?.(i)}
        >
          {item}
          <span className={styles.indicator} />
        </button>
      ))}
    </div>
  )
}
