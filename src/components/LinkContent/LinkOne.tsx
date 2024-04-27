import styles from './LinkStyle.module.css'

export const LinkOne = () => {
    return (
        <p className={styles.content}>
            Complete <span>brief writing or simple guidance</span> on what to include, we've got you covered.
        </p>
    )
}

export const LinkTwo = () => {
    return (
        <p>
            In-depth agency search covering; <span>criteria matching,</span> door knocking and due dilligence vetting.
        </p>
    )
}

export const LinkThree = () => {
    return (
        <p>
            Comprehensive <span>pitch management,</span> including comms, diary management and putch hosting.
        </p>
    )
}