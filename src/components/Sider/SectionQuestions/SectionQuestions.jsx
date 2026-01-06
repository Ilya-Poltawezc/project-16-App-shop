import { useState } from 'react';
import ButtonReverse from '../../Button/ButtonReverse';
import styles from './SectionQuestions.module.scss';
import clsx from 'clsx';
import { questions } from './questions.data';

export default function SectionQuestions() {
    const [open, setOpen] = useState(null)

    return (
        <section className={styles.questions}>
            <div className={clsx('container', styles.questions__div)}>
                <p className={styles.questions__div__h}>Frequently Asked Questions</p>
                <div className={styles.questions__div__block}>
                    {questions.map(({ id, question, answer }) => {
                        const isOpen = open === id

                        return (
                            <div key={id} className={styles.questions__div__card}>
                                <div className={styles.questions__div__card__container}>
                                    <p className={styles.questions__div__card__container__desc}>{question}</p>
                                    <ButtonReverse onClick={() => setOpen(isOpen ? null : id)}/>
                                </div>
                                <p className={`${styles.questions__div__card__p} ${isOpen ? styles.questions__div__card__pShow : ''}`}>{answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
