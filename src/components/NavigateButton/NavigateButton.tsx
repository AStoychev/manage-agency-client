import { useNavigate } from 'react-router-dom';

import styles from './NavigateButton.module.css';

type NavigateButton = {
    buttonName: string,
    goTo: string,
    paddingTop: 0 | 5,
}

export default function NavigateButton({buttonName, goTo, paddingTop}: NavigateButton) {
    const navigate = useNavigate();

    const onButtonClick = () => {navigate(`${goTo}`)}

    return (
        <div style={{paddingTop:paddingTop}} className={styles.navigateButtonWrapper}>
            <button className={styles.navigateButton} onClick={onButtonClick}>{buttonName}</button>
        </div>
    )
}