import styles from './SectionSelecting.module.scss';
import clsx from 'clsx';
import ButtonNextStep from '../../Button/ButtonNextStep'

export default function SelectingStep3({onChange}) {
    return (
        <section id='selecting' className={styles.select3}>
            <div className={clsx('container', styles.select3__div1)}>
                <div className={styles.select3__div1__block1}>
                    <p className={styles.select3__div1__block1__h2}>We will find the perfect pair for you</p>
                    <p className={styles.select3__div1__block1__p}>Answer three questions and we will send you a catalog with the most suitable models for you.</p>
                </div>
                <div className={styles.select3__div1__block2}>
                    <p className={styles.select3__div1__block2__question}>Please clarify any points</p>
                   <div className={styles.select3__div1__block2__questionPoints}>
                    <label htmlFor="texta"></label>
                    <textarea placeholder='Enter your message' className={styles.select3__div1__block2__questionPoints__textarea} id="texta"></textarea>
                   </div>
                </div>
                <div className={styles.select3__div1__block3}>
                    <p className={styles.select3__div1__block3__p}>3 of 3</p>
                    <ButtonNextStep onClick={() => onChange('step3')} />
                </div>
            </div>
        </section>
    )
}