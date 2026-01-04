import { useState } from 'react';
import styles from './SectionSelecting.module.scss';
import clsx from 'clsx';

export default function SelectingStep4() {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help'
    })

    function handleNameChange(event) {
        setForm({
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        })
    }

    return (
        <section id='selecting' className={styles.select4}>
            <div className={clsx('container', styles.select4__div1)}>
                <div className={styles.select4__div1__block1}>
                    <p className={styles.select4__div1__block1__h2}>Your selection is ready!</p>
                    <p className={styles.select4__div1__block1__p}>Please leave your contact information so that we can send you a catalogue prepared for you.</p>
                </div>
                <div className={styles.select4__div1__block2}>
                    <form className={styles.select4__form}>
                        <div className={styles.select4__form__div}>
                            <p className={styles.select4__form__div__h}>Get an offer</p>
                            <p className={styles.select4__form__div__p}>Receive a selection of suitable models by email</p>
                        </div>
                        <div className={styles.select4__form__block}>
                            <label htmlFor="name">
                                <input 
                                    className={styles.select4__form__block__input} 
                                    id="name" 
                                    type="name"
                                    placeholder='Your name' />
                            </label>
                            <label htmlFor="email">
                                <input 
                                    className={styles.select4__form__block__input} 
                                    id="email" 
                                    type="email"
                                    placeholder='E-mail'
                                    style={{
                                        border: form.hasError ? '1px solid red' : null,
                                    }} 
                                    onChange={handleNameChange} />
                                    {<p className={`${styles.select4__form__div__pError} ${form.hasError ? styles.select4__form__div__pErrorShow : ""}`}>This is a required field, without it we will not be able to send you the catalog.</p>}
                            </label>
                        </div>
                        <button disabled={form.hasError} type='submit' className={styles.select4__form__button}>Get</button>
                    </form>
                </div>
            </div>
        </section>
    )
}