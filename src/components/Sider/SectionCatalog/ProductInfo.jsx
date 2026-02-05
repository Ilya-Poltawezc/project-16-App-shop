import { useState, useContext } from 'react';
import ButtonShow from '../../Button/ButtondShow';
import styles from './SectionCatalog.module.scss';
import { content } from './size.data'
import ShowButton from '../../IconsComponents/ShowButton';
import { ModalProduct } from './ModalProduct';
import { CartContext } from '../../../context/CartContext';

export default function ProductInfo({ selectedSize, appliedSize }) {
    const { addToCart} = useContext(CartContext);
    const [hover, setHover] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState(false)
    const [visibleCount, setVisibleCount] = useState(9)

    const showMore = () => {
        setVisibleCount(prev => prev + 6)
    }

    const filteredContent = appliedSize
    ? content.filter(content =>
        content.sizes.includes(appliedSize)
      )
    : content
    
    return (
        <div className={styles.catalog__body}>
            <div className={styles.catalog__bodyGrid}>
                    {filteredContent.slice(0, visibleCount).map((product) => (
                        <article key={product.id} onMouseEnter={() => setHover(product.id)} onMouseLeave={() => setHover(null)} id={product.id} className={`${styles.catalog__bodyCard} ${styles.catalog__bodyCard__cart}`}>
                            <img width={280} height={293} src={product.image} alt="Info" />
                            <p className={styles.catalog__blockP}>{product.description}</p>
                            <p className={styles.catalog__bodyPrace}>{product.price}</p>
                            {<div className={`${styles.catalog__div} ${hover === product.id ? styles.catalog__divActive : ''}`}> 
                                   <button onClick={() => setIsOpen(true)} aria-label="More details" className={styles.catalog__div__buttonShow}><ShowButton /></button>
                                   <button onClick={() => {addToCart(product), setActive(product.id)}} aria-label="Add to cart" className={styles.catalog__div__buttonShowCard}><span className={`${styles.catalog__div__buttonShowCard__accept} ${active === product.id ? styles.catalog__div__buttonShowCard__acceptTewo : ''}`}></span></button>
                                </div>}
                        </article>
                    ))}
            </div>
            {/* hide button if cards === 0 */}
            {visibleCount < filteredContent.length && (
                <ButtonShow onClick={showMore} />
            )}
            <ModalProduct isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}