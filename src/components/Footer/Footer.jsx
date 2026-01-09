import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.png'
import clsx from 'clsx';
import { headerMenu } from '../Header/header.data'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.footer__titleBlock)}>
        <a className={styles.footer__imgLink} href="/">
        <img src={logo} alt="SneakMax" />
        </a>
        <nav className={styles.footer__menu}>
        <ul className={styles.footer__title}>
            {headerMenu.map(({ id, label, href }) => (
                <li key={id} className={styles.footer__item}>
                    <a className={styles.footer__link} href={href}>
                    {label}
                </a>
            </li>
            ))}
        </ul>
        </nav>
      </div>
    </footer>
  )
}