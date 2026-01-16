import { useState } from 'react';
import ButtonShow from '../../Button/ButtondShow';
import styles from './SectionCatalog.module.scss';
import { content } from './size.data'
import ShowButton from '../../IconsComponents/ShowButton';
import ShowButtonBacket from '../../IconsComponents/ShowButtonBacket';
import { ModalProduct } from './ModalProduct';

export default function ProductInfo({ addToCart }) {
    const [hover, setHover] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className={styles.catalog__body}>
            <div className={styles.catalog__bodyGrid}>
                    {content.map((product) => (
                        <article key={product.id} onMouseEnter={() => setHover(product.id)} onMouseLeave={() => setHover(null)} id={product.id} className={styles.catalog__bodyCard}>
                            <img width={280} height={293} src={product.image} alt="Info" />
                            <p className={styles.catalog__blockP}>{product.description}</p>
                            <p className={styles.catalog__bodyPrace}>{product.price}</p>
                            {<div className={`${styles.catalog__div} ${hover === product.id ? styles.catalog__divActive : ''}`}> 
                                   <button onClick={() => setIsOpen(true)} aria-label="More details" className={styles.catalog__div__buttonShow}><ShowButton /></button>
                                   <button onClick={() => addToCart(product)} aria-label="Add to cart" className={styles.catalog__div__buttonShow}><ShowButtonBacket /></button>
                                </div>}
                        </article>
                    ))}
            </div>
            <ButtonShow />
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}