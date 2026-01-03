import styles from './SectionSelecting.module.scss';
import { size } from './select.data'
import clsx from 'clsx';
import ButtonNextStep from '../../Button/ButtonNextStep'
import SelectingImageStep2 from '../../../assets/images/SelectingImageStep2.png'

export default function SelectingStep2({onChange}) {
    return (
        <section id='selecting' className={styles.select2}>
            <div className={clsx('container', styles.select2__div1)}>
                <div className={styles.select2__div1__block1}>
                    <p className={styles.select2__div1__block1__h2}>We will find the perfect pair for you</p>
                    <p className={styles.select2__div1__block1__p}>Answer three questions and we will send you a catalog with the most suitable models for you.</p>
                </div>
                <div className={styles.select2__div1__block2}>
                    <p className={styles.select2__div1__block2__question}>What size will suit you?</p>
                    <div className={styles.select2__grid2}>
                        {size.map(({id, size}) => (
                            <div key={id} className={styles.select2__grid__cardBlock}>
                                <label className={styles.select2__grid__blockP} htmlFor="check2">{size}</label>
                                <input id='check2' className={styles.select2__grid__checkBox} type="checkbox" />
                            </div>
                        ))}
                    </div>
                    <img src={SelectingImageStep2} alt="" />
                </div>
                <div className={styles.select2__div1__block3}>
                    <p className={styles.select2__div1__block3__p}>2 of 3</p>
                    <ButtonNextStep onClick={() => onChange('step2')} />
                </div>
            </div>
        </section>
    )
}