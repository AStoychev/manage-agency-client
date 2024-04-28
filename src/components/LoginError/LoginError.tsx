import styles from './LoginError.module.css'

export default function LoginError() {
    return (
        <div className={styles.errorMessage}>
            <p>Wrong username or password!</p>
        </div>
    )
}