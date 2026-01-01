import styles from './SectionCatalog.module.scss';

export default function CheckBoxInput() {
    return (
         <div className={styles.catalog__checkBlock}>
         <p className={styles.catalog__blockP}>Floor</p>
         <div className={styles.catalog__blockCheck}>
            <div className={styles.catalog__divCheck}>
                <label className={styles.catalog__blockP} htmlFor="male">male</label>
                <input className={styles.catalog__checkBox} id='male' type="checkbox" />
            </div>
            <div className={styles.catalog__divCheck}>
                <label className={styles.catalog__blockP} htmlFor="female">female</label>
                <input className={styles.catalog__checkBox} id='female' type="checkbox" />
            </div>
         </div>
         </div>
    )
}