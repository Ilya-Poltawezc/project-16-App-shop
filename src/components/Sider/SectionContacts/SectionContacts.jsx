import VkFigure from '../../IconsComponents/VkFigure';
import InstagramFigure from '../../IconsComponents/InstagramFigure';
import styles from './SectionContacts.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

export default function SectionContacts() {
    const [open, setOpen] = useState(false)

    return (
        <section id='contacts' className={styles.contacts}>
            <div className={clsx('container', styles.contacts__div)}>
                <div className={styles.contacts__div1}>
                    <p className={styles.contacts__div1__h}>Contacts</p>
                    <div className={styles.contacts__div1__block}>
                        <p className={styles.contacts__div1__block__p}>head office</p>
                        <span onClick={() => setOpen(!open)} className={styles.contacts__div1__block__span}>
                            ?
                        </span>
                        {<span className={`${styles.contacts__div1__block__Clue} ${open ? styles.contacts__div1__block__ClueShow : ""}`}>
                            Address and phone number for correspondence and investors. Questions about delivery, service quality, and product information should be directed to the sales department.
                        </span>}
                    </div>
                    <div className={styles.contacts__div1__div}>
                        <a className={styles.contacts__div1__div__tel} href="tel:38007898989">+380 96 8989891</a>
                        <p className={styles.contacts__div1__div__adres}>40th Novaya Street see Army Street</p>
                    </div>
                    <p className={styles.contacts__div1__block__p}>sales department</p>
                    <div className={styles.contacts__div1__div}>
                        <a className={styles.contacts__div1__div__tel} href="tel:38007898989">+380 96 8989891</a>
                        <p className={styles.contacts__div1__div__adres}>40th Novaya Street see Army Street</p>
                    </div>
                    <div className={styles.contacts__div1__contact}>
                        <a className={styles.contacts__div1__contact__vk} href="/" target='_blank'><VkFigure /></a>
                        <a className={styles.contacts__div1__contact__vk} href="/" target='_blank'><InstagramFigure /></a>
                    </div>
                </div>
                <iframe className={styles.contacts__div1__frame} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162758.30991358767!2d30.367542254200554!3d50.402000150559886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1769976439801!5m2!1sru!2spl" width="680" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}