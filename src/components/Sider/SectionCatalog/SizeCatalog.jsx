import { useState } from 'react';
import styles from './SectionCatalog.module.scss';
import { size } from './size.data'

export default function SizeCatalog({ selectedSize, setSelectedSize }) {
    // const [activeId, setActiveId] = useState(null)

    return (
        <div className={styles.catalog__sizeBlock}>
            <p className={styles.catalog__blockP}>Size</p>
            <div className={styles.catalog__blockGrid}>
                {size.map(({ id, size }) => (
                    <button
                        key={id}
                        onClick={() => setSelectedSize(size)}
                        className={`${styles.catalog__button} ${selectedSize === size ? styles.catalog__active : ''}`}>
                        {size}
                    </button>
                ))}
            </div>
        </div>
    )
}