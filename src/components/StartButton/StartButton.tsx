import { useNavigate } from 'react-router-dom'

import styles from './StartButton.module.css'

export default function StartButton()  {
  const navigate = useNavigate();

  const onButtonStartClick = () => {
    navigate('/main')
  }
  return (
    <button className={styles.startButton} onClick={onButtonStartClick}>Start</button>
  )
}