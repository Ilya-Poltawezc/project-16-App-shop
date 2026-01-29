import styles from './SectionForm.module.scss';
import clsx from 'clsx';
import imageForm from '../../../assets/images/imageForm.png'
import One from '../../../assets/images/Forms/One.png'
import Two from '../../../assets/images/Forms/Two.png'
import Three from '../../../assets/images/Forms/Three.png'
import For from '../../../assets/images/Forms/For.png'
import Five from '../../../assets/images/Forms/Five.png'
import { useState } from 'react';

export default function SectionForm() {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = "Name necessarily"
    }

    if (!tel.trim()) {
      newErrors.tel = "Without a phone number we won't be able to contact you."
    } else if (!tel.includes("+")) {
      newErrors.tel = `Incorrect phone add "+"`
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!")
      location.reload()
    }
  }

    return (
        <section id='delivery' className={styles.forms}>
            <div className={clsx('container', styles.forms__div)}>
                <form onSubmit={handleSubmit} className={styles.forms__form}>
                    <div className={styles.forms__form__block}>
                        <p className={styles.forms__form__block__h}>Any questions?</p>
                        <p className={styles.forms__form__block__p}>Fill out the form and our manager will contact you</p>
                    </div>
                    <div className={styles.forms__form__div}>
                        <label className={styles.forms__form__div__label} htmlFor="name">
                            <input 
                                className={styles.forms__form__div__inpt} 
                                type="text"
                                value={name}
                                style={{
                                        border: errors.name ? '1px solid red' : null,
                                    }}  
                                onChange={(e) => setName(e.target.value)}
                                id='name'
                                placeholder='Your name'
                                 />
                                {errors.name && <p className={styles.forms__form__div__pError}>{errors.name}</p>}
                        </label>
                        <label className={styles.forms__form__div__label} htmlFor="tel">
                            <input 
                                className={styles.forms__form__div__inpt} 
                                type="text" 
                                id='tel'
                                value={tel}
                                style={{
                                        border: errors.tel ? '1px solid red' : null,
                                    }} 
                                onChange={(e) => setTel(e.target.value)}
                                placeholder='Phone number'
                                 />
                                 {errors.tel && <p className={styles.forms__form__div__pError}>{errors.tel}</p>}
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