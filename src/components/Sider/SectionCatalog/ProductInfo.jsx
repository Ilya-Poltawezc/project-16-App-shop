import ButtonShow from '../../Button/ButtondShow';
import styles from './SectionCatalog.module.scss';
import { content } from './size.data'

export default function ProductInfo() {
    return (
        <div className={styles.catalog__body}>
            <div className={styles.catalog__bodyGrid}>
                    {content.map(({ id, description, price, image }) => (
                        <button key={id} id={id} className={styles.catalog__bodyCard}>
                            <img width={280} height={293} src={image} alt="Info" />
                            <p className={styles.catalog__blockP}>{description}</p>
                            <p className={styles.catalog__bodyPrace}>{price}</p>
                        </button>
                    ))}
            </div>
            <ButtonShow />
        </div>
    )
}