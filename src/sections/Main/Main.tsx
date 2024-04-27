import { useState, useEffect } from 'react';

import { useForm } from '@/hooks/useForm';

import { getLinkText } from '../../functions/getLinkText/getLinkText';
import { LinkOne, LinkTwo, LinkThree } from '../../components/LinkContent/LinkOne';

import MainLinks from '../../components/MainLinks/MainLinks';
import AuthButton from '../../components/AuthButton/AuthButton';
import NavigateButton from '@/components/NavigateButton/NavigateButton';
import LoginModal from '../LoginModal/LoginModal';
import GreetUser from '../../components/GreetUser/GreetUser';

import styles from './Main.module.css';

export default function Main() {
    // const [isLoged, setIsLoged] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    const { haveUser, isLoged, logout } = useForm();

    // const haveUser = localStorage.getItem('auth')

    const onOpenClick = () => { setModal(true) };
    const onCloseClick = () => { setModal(false) };

    const onLogoutClick = () => { logout() }
    // const onLogoutClick = () => {
    //     localStorage.removeItem('auth')
    //     setIsLoged(false)
    // }

    // useEffect(() => {
    //     if (haveUser) {
    //         setIsLoged(true)
    //     }
    // }, [haveUser])

    return (
        <div className={styles.container}>
                {!isLoged
                    ?
                    <AuthButton onPress={onOpenClick} buttonName='LOGIN' />
                    :
                    <div className={styles.haveUser}>
                        <GreetUser user={haveUser} />
                        <NavigateButton buttonName='DASHBOARD' goTo='/dashboard' paddingTop={5} />
                        <AuthButton onPress={onLogoutClick} buttonName='LOGOUT' />
                    </div>
                }

            {modal ? <LoginModal onCloseClick={onCloseClick} /> : ''}
            <div className={styles.titleWrapper}>
                <h1>Managed agency selection</h1>
                <h4>Stengthen your onboarding process</h4>
            </div>

            <div className={styles.sectionsWrapper}>
                <div className={styles.imageWrapper}>
                    <img src='/img/video.png' />
                </div>
                <div className={styles.linksWrapper}>
                    <MainLinks
                        width={getLinkText.link_one.width}
                        background={getLinkText.link_one.background}
                        image={getLinkText.link_one.image}
                        title={getLinkText.link_one.title}
                        content={<LinkOne />}
                    />
                    <MainLinks
                        width={getLinkText.link_two.width}
                        background={getLinkText.link_two.background}
                        image={getLinkText.link_two.image}
                        title={getLinkText.link_two.title}
                        content={<LinkTwo />}
                    />
                    <MainLinks
                        width={getLinkText.link_three.width}
                        background={getLinkText.link_three.background}
                        image={getLinkText.link_three.image}
                        title={getLinkText.link_three.title}
                        content={<LinkThree />}
                    />
                </div>
            </div>
        </div>
    )
}