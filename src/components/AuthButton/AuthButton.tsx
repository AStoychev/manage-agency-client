import styles from './AuthButton.module.css';

type AuthButtonProps = {
    onPress: Function,
    buttonName: string
}

export default function AuthButton({onPress, buttonName}: AuthButtonProps) {
    const onButtonClick = () => {onPress()}

    return (
        <div className={styles.loginButtonWrapper}>
            <button className={styles.authButton} onClick={onButtonClick}>{buttonName}</button>
        </div>
    )
}