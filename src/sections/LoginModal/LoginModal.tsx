import { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

import { FcInfo } from "react-icons/fc";
import styles from './LoginModal.module.css';

type ModalProps = {
    onCloseClick: Function
}

export default function LoginModal({ onCloseClick }: ModalProps) {
    const onButtonCloseClick = () => { onCloseClick() }
    const onClickOutside = () => { onCloseClick() }

    const { formData, serverResponce, error, handleChange, handleSubmit } = useForm();


    useEffect(() => {
        if (serverResponce) {
            onCloseClick()
        }
    }, [serverResponce])

    return (
        <div>
            <div className={styles.overlay} onClick={onClickOutside}></div>
            <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={onButtonCloseClick}>X</button>
                <div className={styles.textWrapper}>
                    <h3>Sing in</h3>
                    <p>Welcome back! Please sign in to continue</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputsWrapper}>
                        <label htmlFor='username'></label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='Add username'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <label htmlFor='password'></label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='******'
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {error &&
                            <div className={styles.errorMessage}>
                                <p>Wrong username or password!</p>
                            </div>
                        }

                    </div>

                    <button type='submit'>CONTINUE</button>
                    <FcInfo className={styles.icon} title='DEFAULT USERS: username: User; password: test' />
                </form>
            </div>
        </div>
    )
}