import { useState } from 'react';
import ButtonShow from '../../Button/ButtondShow';
import styles from './SectionCatalog.module.scss';
import { content } from './size.data'
import ShowButton from '../../IconsComponents/ShowButton';
import ShowButtonBacket from '../../IconsComponents/ShowButtonBacket';
import { ModalProduct } from './ModalProduct';

export default function ProductInfo() {
    const [hover, setHover] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={styles.catalog__body}>
            <div className={styles.catalog__bodyGrid}>
                    {content.map(({ id, description, price, image }) => (
                        <article onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)} key={id} id={id} className={styles.catalog__bodyCard}>
                            <img width={280} height={293} src={image} alt="Info" />
                            <p className={styles.catalog__blockP}>{description}</p>
                            <p className={styles.catalog__bodyPrace}>{price}</p>
                            {<div className={`${styles.catalog__div} ${hover === id ? styles.catalog__divActive : ''}`}> 
                                   <button onClick={() => setIsOpen(true)} aria-label="More details" className={styles.catalog__div__buttonShow}><ShowButton /></button>
                                   <button aria-label="Add to cart" className={styles.catalog__div__buttonShow}><ShowButtonBacket /></button>
                                </div>}
                        </article>
                    ))}
            </div>
            <ButtonShow />
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}