import CheckBoxInput from './CheckBoxInput';
import RangeInput from './RangeInput';
import styles from './SectionCatalog.module.scss';
import clsx from 'clsx';
import SizeCatalog from './SizeCatalog';
import ButtonApp from '../../Button/ButtonApp';
import ButtonReset from '../../Button/ButtonReset';
import ProductInfo from './ProductInfo';
import ButtonShowDetails from './ButtonShowDetails';
import { useState } from 'react';

export default function SectionCatalog() {
    const [selectedSize, setSelectedSize] = useState(null);
    const [appliedSize, setAppliedSize] = useState(null);
    return (
        <div id='catalog' className={clsx('container', styles.catalog)}>
            <div className={styles.catalog__title}>
                <h2 className={styles.catalog__h2}>Selection<br></br> by parameters</h2>
                <RangeInput />
                <CheckBoxInput />
                <SizeCatalog selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
                <ButtonApp setAppliedSize={setAppliedSize} selectedSize={selectedSize} />
                <ButtonReset />
            </div>
            <ButtonShowDetails />
            <ProductInfo appliedSize={appliedSize} selectedSize={selectedSize} />
        </div>
    )
}