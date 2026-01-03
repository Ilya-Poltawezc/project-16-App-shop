import styles from './Button.module.scss'

export default function Button({onClick}) {
    return (
        <button onClick={onClick} className={styles.buttonNext}>Next step</button>
    )
}