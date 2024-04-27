import { useState } from 'react';
import styles from './MainLinks.module.css';

type LinksProps = {
    width: string;
    background: string;
    image: string,
    title: string;
    content: React.ReactNode,
}

export default function MainLinks({ width, background, image, title, content }: LinksProps) {

    const [overLink, setOverLink] = useState(styles.header)

    const onMouseEnter = () => {
        setOverLink(styles.overHeader)
    }

    const onMouseLeave = () => {
        setOverLink(styles.header)
    }

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={styles.links} style={{ background, width }}>
            <img src={image} />
            <div>
                <h4 className={overLink}>{title}</h4>
                {content}
            </div>
        </div>


        // <div className={styles.links}>
        //     <img src='/img/main-icons/brief.png' />
        //     <div>
        //         <h4>Brief</h4>
        //         <p>Complete <span>brief writing or simple guidance</span> on what to include, we've got you covered.</p>
        //     </div>
        // </div>
    )
}