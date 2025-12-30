import { useState } from "react"
import BacketIcon from "../IconsComponents/BacketIcon"
import styles from './Header.module.scss';
import { headerMenu } from './header.data'

export default function ButtonMenuHeader() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.header__open}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.header__menuButton}>
            <span className={styles.header__span}></span>
            <span className={styles.header__span}></span>
            <span className={styles.header__span}></span>
        </button>
        {<ul className={`${styles.header__titleMenu} ${isOpen ? styles.header__MenuOpen : ""}`}>
                    {headerMenu.map(({ id, label, href }) => (
                        <li key={id} className={styles.header__item}>
                            <a className={styles.header__link} href={href}>
                            {label}
                        </a>
                    </li>
                    ))}
                    <li className={styles.header__item}>
                        <a className={styles.header__linkBac} href="/">
                            Basket 
                            <BacketIcon />
                        </a>
                    </li>
                </ul>}
        </div>
    )
}