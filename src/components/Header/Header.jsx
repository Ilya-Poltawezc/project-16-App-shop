import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import clsx from 'clsx';
import Button from '../Button/Button';
import BacketIcon from '../IconsComponents/BacketIcon';
import { headerMenu } from './header.data'
import ButtonMenuHeader from './ButtonMenuHeader';
import { useState, useContext } from 'react';
import TrashIcon from '../IconsComponents/TrashIcon';
import { CartContext } from '../../context/CartContext';

export default function Header() {
  const { cart, removeFromCart, openCart } = useContext(CartContext)
  const [open, setOpen] = useState(false)

  const cartItems = cart || []
  const total = cartItems.reduce((acc, item) => {
  const priceNumber = Number(item.price.toString().replace(/\$/g, '')) || 0;
  return acc + priceNumber;
}, 0);

  console.log("CART:", cart);
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
                <button onClick={() => setOpen(!open)} className={styles.header__linkBac} href="/">
                    Basket 
                    <BacketIcon />
                    {/* {Displayed a product cost counter. If there is no product, the counter is not visible. If it appears, the counter appears.} */}
                    <div className={styles.header__count}>
                    {cart.length > 0 && (
                   <span className={styles.header__count__span}>{cart.length}</span>
                    )}
                   </div>
                </button>
                {/* {Next we display the shopping cart itself, where they are added} */}
                  {cart.length === 0 ? <span className={`${styles.header__error} ${open ? styles.header__errorHide : ''}`}><p className={styles.header__error__p}>You haven't selected a product yet, go to the catalog!</p></span> : <div className={`${styles.header__openBasket} ${open ? styles.header__openBasketHide : ""}`}>
                        {cart.map((item) => (
                      <div key={item.id} className={styles.header__openBasket__card}>
                          <img width={100} height={60} src={item.image} alt={item.description} />
                      <div className={styles.header__openBasket__card__block2}>
                          <div>
                            <p className={styles.header__openBasket__card__block2__p}>{item.description}</p>
                            <span className={styles.header__openBasket__card__block2__span}>{item.price}</span>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className={styles.header__openBasket__card__block2__btn}>
                            <TrashIcon />
                          </button>
                      </div>
                    </div>
                  ))}
                  <div className={styles.header__openBasket__div}>
                    <div className={styles.header__openBasket__div__block1}>
                      <p className={styles.header__openBasket__div__block1__p}>
                        Total:
                      </p>
                      <p className={styles.header__openBasket__div__block1__price}>
                        {/* {here is the sum of goods, the function above is immediately after all states} */}
                        {total} $
                      </p>
                    </div>
                    <button onClick={openCart} className={styles.header__openBasket__div__button}>
                      Go to cart
                    </button>
                  </div>
                  </div>}
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