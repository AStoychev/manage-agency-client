import { useState, useEffect } from 'react';

import { useForm } from '../../hooks/useForm';
import LoginError from '@/components/LoginError/LoginError';
import Spinner from '@/components/Spinner/Spinner';

import { FcInfo } from "react-icons/fc";
import styles from './LoginModal.module.css';

type ModalProps = {
    onCloseClick: Function
}

export default function LoginModal({ onCloseClick }: ModalProps) {
    const [spinner, setSpinner] = useState<boolean>(false);

    const onButtonCloseClick = () => { onCloseClick() }
    const onClickOutside = () => { onCloseClick() }

    const { formData, serverResponce, error, handleChange, handleSubmit } = useForm();

    const onButtonSubmit = (e: any) => {
        handleSubmit(e)
        setSpinner(true);
    }

    useEffect(() => {
        if (serverResponce) {
            onCloseClick();
        }
        if(error) {
            setSpinner(false)
        }
    }, [serverResponce, error])

    return (
        <div>
            <div className={styles.overlay} onClick={onClickOutside}></div>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onButtonCloseClick}>X</button>
                <div className={styles.textWrapper}>
                    <h3>Sing in</h3>
                    <p>Welcome back! Please sign in to continue</p>
                </div>
                <form onSubmit={(e) => onButtonSubmit(e)}>
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

                        {error && <LoginError />}

                    </div>

                    {!spinner ?
                        <button type='submit'>CONTINUE</button>
                        :
                        <Spinner />
                    }

                    <FcInfo className={styles.icon} title='DEFAULT USERS&#010;username: User password: test &#010;username: Alice password: test &#010;username: John password: test' />
                </form>
            </div>
        </div>
    )
}