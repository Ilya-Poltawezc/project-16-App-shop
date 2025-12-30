import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import clsx from 'clsx';
import Button from '../Button/Button';
import BacketIcon from '../IconsComponents/BacketIcon';
import { headerMenu } from './header.data'
import ButtonMenuHeader from './ButtonMenuHeader';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__titleBlock)}>
        <a className={styles.header__imgLink} href="/">
        <img src={logo} alt="SneakMax" />
        </a>
        <nav className={styles.header__menu}>
        <ul className={styles.header__title}>
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
        </ul>
        </nav>
        <ButtonMenuHeader />
      </div>
      <div className={clsx('container', styles.header__body)}>
        <div className={styles.header__bodyDiv}>
            <h1 className={styles.header__bodyTitle}>Sneakers from famous brands
            with delivery throughout Russia and the CIS</h1>
            <p className={styles.header__descTitle}>We sell sneakers from Nike, Adidas, Puma, Reebok, Converse and many other brands at low prices.</p>
            <Button />
        </div>
      </div>
    </header>
  )
}