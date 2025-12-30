import styles from './SectionCatalog.module.scss';
import { useState } from 'react';


export default function RangeInput() {
    const [fromValue, setFromValue] = useState(0)
    const [toValue, setToValue] = useState(0)

    const handleSliderChange = (e) => {
        setFromValue(e.target.value)
    }

    const handleSliderToVal = (e) => {
        setToValue(e.target.value)
    }

    return (
        <div className={styles.catalog__block}>
            <p className={styles.catalog__blockP}>Price, $</p>
                <div className={styles.catalog__inputBlock}>
                    <div className={styles.catalog__input}>
                        <label className={styles.catalog__label} htmlFor="inpt1">
                            <input 
                                className={styles.catalog__inpt1} 
                                type="text" 
                                id='inpt1'
                                value={fromValue} readOnly/>
                        </label>
                    </div>
                    <div className={styles.catalog__line}></div>
                <div className={styles.catalog__input}>
                        <label className={styles.catalog__label} htmlFor="inpt2">
                            <input 
                                className={styles.catalog__inpt2} 
                                type="text" 
                                id='inpt2' 
                                value={toValue} readOnly/>
                        </label>
                    </div>
                </div>
            <div className={styles.catalog__rangeBlock}>
            <input 
                className={styles.catalog__rangeInpt} 
                type="range" 
                min="1850"
                max="25768"
                value={fromValue}
                onChange={handleSliderChange}/>
            <input 
                className={styles.catalog__rangeInpt} 
                type="range" 
                min={fromValue}
                max="25768"
                value={toValue}
                onChange={handleSliderToVal}/>
            </div>
        </div>
    )
}