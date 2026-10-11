import { CaptureBar } from '../shared/CaptureBar'
import { PhoneFrame } from '../shared/PhoneFrame'
import { ViewfinderHeader } from '../shared/ViewfinderHeader'
import { ConsentSheet } from './parts/ConsentSheet'
import { ScanFrame } from './parts/ScanFrame'
import styles from './CameraConsent.module.css'

export function CameraConsent() {
  return (
    <PhoneFrame darkStatusBar>
      <div className={styles.screen}>
        <ViewfinderHeader title="Опознание знаков" leftIconName="times" rightIconName="setting" />
        <div className={styles.viewfinder}>
          <ScanFrame />
        </div>
        <div className={styles.dimmedCaptureBar}>
          <CaptureBar />
        </div>
        <div className={styles.scrim} />
        <div className={styles.sheetWrap}>
          <ConsentSheet />
        </div>
      </div>
    </PhoneFrame>
  )
}
