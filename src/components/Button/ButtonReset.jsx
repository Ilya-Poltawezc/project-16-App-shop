import styles from './Button.module.scss'

export default function ButtonReset() {
    const reset = () => {
        location.reload()
    }

    return (
        <button onClick={reset} type='reset' className={styles.buttonReset}>Reset</button>
    )
}