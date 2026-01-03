import styles from './SectionSelecting.module.scss';
import { selecting } from './select.data'
import clsx from 'clsx';
import ButtonNextStep from '../../Button/ButtonNextStep'

export default function SelectingStep1({onChange}) {
    return (
        <section id='selecting' className={styles.select1}>
            <div className={clsx('container', styles.select1__div1)}>
                <div className={styles.select1__div1__block1}>
                    <p className={styles.select1__div1__block1__h2}>We will find the perfect pair for you</p>
                    <p className={styles.select1__div1__block1__p}>Answer three questions and we will send you a catalog with the most suitable models for you.</p>
                </div>
                <div className={styles.select1__div1__block2}>
                    <p className={styles.select1__div1__block2__question}>What type of sneakers are you considering?</p>
                    <div className={styles.select1__grid}>
                        {selecting.map(({id, image, name}) => (
                            <article key={id} className={styles.select1__grid__card}>
                                <img 
                                    className={styles.select1__grid__cardImage}
                                    src={image} 
                                    alt="sneackers" />
                                    <div className={styles.select1__grid__cardBlock}>
                                        <label className={styles.select1__grid__blockP} htmlFor="check">{name}</label>
                                        <input id='check' className={styles.select1__grid__checkBox} type="checkbox" />
                                    </div>
                            </article>
                        ))}
                    </div>
                </div>
                <div className={styles.select1__div1__block3}>
                    <p className={styles.select1__div1__block3__p}>1 of 3</p>
                    <ButtonNextStep onClick={() => onChange('step1')}/>
                </div>
            </div>
        </section>
    )
}