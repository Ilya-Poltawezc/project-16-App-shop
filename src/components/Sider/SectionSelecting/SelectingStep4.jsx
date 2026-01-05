import { useState } from 'react';
import styles from './SectionSelecting.module.scss';
import clsx from 'clsx';

export default function SelectingStep4() {
  const [form, setForm] = useState({
    name: '',
    touched: false,
    hasError: false,
  })

  function handleNameChange(e) {
    const value = e.target.value

    setForm({
      name: value,
      touched: true,
      hasError: value.trim().length === 0,
    })
  }

    function handleSubmit(e) {
    e.preventDefault()

    if (form.hasError) {
      setForm(({ touched: false
       }))
      return 
    }

    console.log('Form submitted:', form.email)
  }

    return (
        <section id='selecting' className={styles.select4}>
            <div className={clsx('container', styles.select4__div1)}>
                <div className={styles.select4__div1__block1}>
                    <p className={styles.select4__div1__block1__h2}>Your selection is ready!</p>
                    <p className={styles.select4__div1__block1__p}>Please leave your contact information so that we can send you a catalogue prepared for you.</p>
                </div>
                <div className={styles.select4__div1__block2}>
                    <form onSubmit={handleSubmit} className={styles.select4__form}>
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
                                    className={`${styles.select4__form__block__input} ${form.touched && form.hasError ? styles.error : ''}`}
                                    id="email" 
                                    type="email"
                                    placeholder='E-mail'
                                    value={form.name}
                                    style={{
                                        border: form.hasError ? '1px solid red' : null,
                                    }} 
                                    onChange={handleNameChange} />
                                    {form.hasError && <p className={`${styles.select4__form__div__pError} ${form.hasError ? styles.select4__form__div__pErrorShow : ""}`}>This is a required field, without it we will not be able to send you the catalog.</p>}
                            </label>
                        </div>
                        <button type='submit' className={styles.select4__form__button}>Get</button>
                    </form>
                </div>
            </div>
        </section>
    )
}