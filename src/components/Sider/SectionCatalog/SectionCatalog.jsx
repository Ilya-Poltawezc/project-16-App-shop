import CheckBoxInput from './CheckBoxInput';
import RangeInput from './RangeInput';
import styles from './SectionCatalog.module.scss';
import clsx from 'clsx';
import SizeCatalog from './SizeCatalog';

export default function SectionCatalog() {
    return (
        <div className={clsx('container', styles.catalog)}>
            <div className={styles.catalog__title}>
                <h2 className={styles.catalog__h2}>Selection<br></br> by parameters</h2>
                <RangeInput />
                <CheckBoxInput />
                <SizeCatalog />
            </div>
            <div>adsa</div>
        </div>
    )
}