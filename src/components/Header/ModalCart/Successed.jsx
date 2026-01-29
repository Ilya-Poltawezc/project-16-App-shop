import styles from './ModalCart.module.scss'

export default function Successed() {
    return (
      <div className={styles.modal__suces}>
        <div className={styles.modal__checkmark}>✔</div>
      </div>
    )
  }