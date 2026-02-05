import styles from './Button.module.scss'

export default function ButtonApp({setAppliedSize, selectedSize}) {
    return (
        <button onClick={() => setAppliedSize(selectedSize)} className={styles.buttonApp}>Apply</button>
    )
}