import { useState } from 'react'
import styles from './Button.module.scss'

export default function ButtonReverse({ onClick }) {
    const [rotate, setRotate] = useState(false);

    const handleClick = () => {
        setRotate(prev => !prev);

        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`
                ${styles.buttonReverse}
                ${rotate ? styles.buttonReverseRotate : ''}
            `}
        >
            <svg className={styles.buttonReverse__svg} width="25" height="26" viewBox="0 0 25 26">
                <path d="M12.9509 12.3623H25V13.6623H12.9509V26H11.5731V13.6623H0V12.3623H11.5731V0H12.9509V12.3623Z" />
            </svg>
        </button>
    );
}