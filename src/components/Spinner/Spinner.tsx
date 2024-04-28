import PuffLoader from 'react-spinners/PuffLoader'

import styles from './Spinner.module.css'

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <PuffLoader color="#006EFD" size={32}/>
            <p className={styles.loading}>Please don't close this window!</p>
        </div>
    )
}