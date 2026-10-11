import { useNavigate } from 'react-router-dom'
import { OverlayChip } from '../../components'
import { CaptureBar } from '../shared/CaptureBar'
import { PhoneFrame } from '../shared/PhoneFrame'
import { ViewfinderHeader } from '../shared/ViewfinderHeader'
import arStreetScene from '../../assets/photos/ar-street-scene.jpg'
import { DetectionBox } from './parts/DetectionBox'
import styles from './ArRecognition.module.css'

export function ArRecognition() {
  const navigate = useNavigate()
  return (
    <PhoneFrame darkStatusBar>
      <div className={styles.screen}>
        <ViewfinderHeader title="Опознание знаков" leftIconName="times" rightIconName="setting" />
        <div className={styles.viewfinder}>
          <img className={styles.backgroundPhoto} src={arStreetScene} alt="" />
          <DetectionBox size={168} top={312} left={77} />
          <DetectionBox size={84} top={167} left={270} />
          <OverlayChip className={styles.chip1}>40 км/ч</OverlayChip>
          <OverlayChip className={styles.chip2}>Уступить дорогу</OverlayChip>
        </div>
        <CaptureBar onCapture={() => navigate('/screens/recognition-result-text-first')} />
      </div>
    </PhoneFrame>
  )
}
