import { PhoneFrame } from '../shared/PhoneFrame'
import onboardingBg from '../../assets/photos/onboarding-bg.png'
import styles from './Onboarding.module.css'

export function Onboarding() {
  return (
    <PhoneFrame>
      <div className={styles.background} aria-hidden>
        <img className={styles.bgImage} src={onboardingBg} alt="" />
      </div>
      <div className={styles.spacer}>
        <p className={`${styles.tagline} ds-body-base`}>
          Твой AI ассистент
          <br />
          в дороге
        </p>
      </div>
    </PhoneFrame>
  )
}
