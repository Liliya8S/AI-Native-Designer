import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export type InputType = 'text' | 'search'
export type InputState = 'default' | 'error' | 'focus' | 'filled'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: InputType
  state?: InputState
}

export function Input({ type = 'text', state = 'default', className, ...rest }: InputProps) {
  const wrapperClasses = [styles.wrapper, state !== 'default' ? styles[state] : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={wrapperClasses}>
      {type === 'search' && <span className={styles.searchIcon} aria-hidden />}
      <input
        type={type === 'search' ? 'search' : 'text'}
        className={`${styles.input} ds-body-sm`}
        {...rest}
      />
    </span>
  )
}
