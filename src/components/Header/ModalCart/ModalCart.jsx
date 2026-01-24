import { createPortal } from "react-dom";
import styles from './ModalCart.module.scss'
import clsx from 'clsx';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function ModalCart() {
  console.log("MODAL COMPONENT RENDER");
  const { isCartOpen, closeCart, cart, removeFromCart } = useContext(CartContext);
  
  const random = Math.floor(100000 + Math.random() * 900000)

  console.log("isCartOpen =", isCartOpen);

  if (!isCartOpen) return null;

  const cartItems = cart || []
  const total = cartItems.reduce((acc, item) => {
  const priceNumber = Number(item.price.toString().replace(/\$/g, '')) || 0;
  return acc + priceNumber;
  }, 0)

  return createPortal(
    <div className={styles.modal} onClick={(e) => {
      if (e.target === e.currentTarget) {
      closeCart()
      }
    }}>
      <div className={clsx("container", styles.modal__div)} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__div__block1}>
          <p className={styles.modal__div__block1__title}>Placing an order</p>
          <p className={styles.modal__div__block1__p}>{random}</p>
        </div>
        <div className={styles.modal__div__block2}>
          <div className={styles.modal__div__block2__count}>
            <p className={styles.modal__div__block2__count__p}>Items in order:</p>
              {cart.length > 0 && (
                  <span className={styles.modal__div__block2__count__span}>{cart.length}</span>
              )}
          </div>
          <div className={styles.modal__div__block2__count}>
              <p className={styles.modal__div__block2__count__p}>
                Total:
              </p>
              <p className={styles.modal__div__block2__count__span}>
                {total} $
              </p>
          </div>
          <p className={styles.modal__div__block2__order}>
            Order contents
          </p>
          {cart.map((item) => (
              <div key={item.id} className={styles.modal__div__block2__card}>
                  <img width={100} height={60} src={item.image} alt={item.description} />
                <div className={styles.modal__div__block2__blockTwo}>
                    <div>
                        <p className={styles.modal__div__block2__blockTwo__p}>{item.description}</p>
                        <span className={styles.modal__div__block2__blockTwo__span}>{item.price}</span>
                    </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.modal__div__block2__blockTwo__btn}>
                      Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
        <form className={styles.modal__div__block3}>
          <label htmlFor="formName">
            <input 
              className={styles.modal__div__block3__inpt} 
              type="text" 
              id="formName"
              placeholder="Your name" />
          </label>
          <label htmlFor="formTel">
            <input 
              className={styles.modal__div__block3__inpt} 
              type="text" 
              id="formTel"
              placeholder="Your phone" />
          </label>
          <label htmlFor="formEmail">
            <input 
              className={styles.modal__div__block3__inpt} 
              type="text" 
              id="formEmail"
              placeholder="Your email" />
          </label>
        </form>
        <button type="submit" className={styles.modal__div__button}>
          Place an order
        </button>
      </div>
    </div>,
    document.getElementById("modalCart-root")
  );
}