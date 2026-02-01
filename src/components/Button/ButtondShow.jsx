import styles from './Button.module.scss'

export default function ButtonShow({onClick}) {
    return (
        <button onClick={onClick} className={styles.buttonShow}>Show more</button>
    )
}