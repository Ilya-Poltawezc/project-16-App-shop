import CheckBoxInput from './CheckBoxInput';
import RangeInput from './RangeInput';
import styles from './SectionCatalog.module.scss';
import clsx from 'clsx';
import SizeCatalog from './SizeCatalog';
import ButtonApp from '../../Button/ButtonApp';
import ButtonReset from '../../Button/ButtonReset';
import ProductInfo from './ProductInfo';
import ButtonShowDetails from './ButtonShowDetails';

export default function SectionCatalog() {
    return (
        <div className={clsx('container', styles.catalog)}>
            <div className={styles.catalog__title}>
                <h2 className={styles.catalog__h2}>Selection<br></br> by parameters</h2>
                <RangeInput />
                <CheckBoxInput />
                <SizeCatalog />
                <ButtonApp />
                <ButtonReset />
            </div>
            <ButtonShowDetails />
            <ProductInfo />
        </div>
    )
}