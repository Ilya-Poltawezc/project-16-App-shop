import { createPortal } from "react-dom";
import styles from './ModalCart.module.scss'
import clsx from 'clsx';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function ModalCart() {
  console.log("MODAL COMPONENT RENDER");
  const { isCartOpen, closeCart } = useContext(CartContext);

  console.log("isCartOpen =", isCartOpen);

  if (!isCartOpen) return null;

  return createPortal(
    <div className={styles.modal} onClick={closeCart}>
      <div
        className={clsx("container", styles.modal__div)}
        onClick={(e) => e.stopPropagation()}
      >
        MODAL CART
      </div>
    </div>,
    document.getElementById("modalCart-root")
  );
}