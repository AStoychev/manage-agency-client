import StartButton from '../../components/StartButton/StartButton';

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <h1>Agency procurement, outsourced.</h1>
                    <h3>Start the process here</h3>
                </div>
                <div className={styles.buttonWrapper}>
                    <StartButton />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src='/img/heroimg.png'/>
            </div>
        </div>
    )
}