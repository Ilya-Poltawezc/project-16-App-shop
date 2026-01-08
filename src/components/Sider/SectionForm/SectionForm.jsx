import styles from './SectionForm.module.scss';
import clsx from 'clsx';
import imageForm from '../../../assets/images/imageForm.png'
import One from '../../../assets/images/Forms/One.png'
import Two from '../../../assets/images/Forms/Two.png'
import Three from '../../../assets/images/Forms/Three.png'
import For from '../../../assets/images/Forms/For.png'
import Five from '../../../assets/images/Forms/Five.png'

export default function SectionForm() {
    return (
        <section className={styles.forms}>
            <div className={clsx('container', styles.forms__div)}>
                <form className={styles.forms__form}>
                    <div className={styles.forms__form__block}>
                        <p className={styles.forms__form__block__h}>Any questions?</p>
                        <p className={styles.forms__form__block__p}>Fill out the form and our manager will contact you</p>
                    </div>
                    <div className={styles.forms__form__div}>
                        <label className={styles.forms__form__div__label} htmlFor="name">
                            <input 
                                className={styles.forms__form__div__inpt} 
                                type="name" 
                                id='name'
                                placeholder='Your name' />
                        </label>
                        <label className={styles.forms__form__div__label} htmlFor="tel">
                            <input 
                                className={styles.forms__form__div__inpt} 
                                type="phone" 
                                id='tel'
                                placeholder='Phone number' />
                        </label>
                        <button type='submit' className={styles.forms__form__div__btn}>Submit</button>
                    </div>
                </form>
                <div className={styles.forms__call}>
                    <a className={styles.forms__call__link} href="/" target='_blank'>
                        <img src={imageForm} alt="" />
                    </a>
                    <div className={styles.forms__call__block}>
                        <div className={styles.forms__call__block__div}>
                            <div>
                                <img className={styles.forms__call__block__div__img} src={One} alt="" />
                            </div>
                            <div>
                                <img className={styles.forms__call__block__div__img} src={Two} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={Three} alt="" />
                        </div>
                        <div className={styles.forms__call__block__div}>
                            <div>
                                <img className={styles.forms__call__block__div__img} src={For} alt="" />
                            </div>
                            <div>
                                <img className={styles.forms__call__block__div__img} src={Five} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}