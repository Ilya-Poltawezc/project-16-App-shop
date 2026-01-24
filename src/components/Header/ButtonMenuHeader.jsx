import { useState, useContext } from "react"
import BacketIcon from "../IconsComponents/BacketIcon"
import styles from './Header.module.scss';
import { headerMenu } from './header.data'
import TrashIcon from '../IconsComponents/TrashIcon';
import { CartContext } from '../../context/CartContext';

export default function ButtonMenuHeader() {
    const { cart, removeFromCart, openCart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)

  const cartItems = cart || []
  const total = cartItems.reduce((acc, item) => {
  const priceNumber = Number(item.price.toString().replace(/\$/g, '')) || 0;
  return acc + priceNumber;
}, 0);

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
                </ul>}
        </div>
    )
}