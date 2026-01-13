import styles from '../Sider/SectionCatalog/SectionCatalog.module.scss';

export default function ShowButton() {
    return (
        <svg className={styles.catalog__div__buttonSvg} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.9518 15.0664C18.9518 17.2489 17.1818 19.0176 14.9993 19.0176C12.8168 19.0176 11.0481 17.2489 11.0481 15.0664C11.0481 12.8826 12.8168 11.1139 14.9993 11.1139C17.1818 11.1139 18.9518 12.8826 18.9518 15.0664Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M14.9975 24.1936C19.7575 24.1936 24.1113 20.7711 26.5625 15.0661C24.1113 9.3611 19.7575 5.9386 14.9975 5.9386H15.0025C10.2425 5.9386 5.88875 9.3611 3.4375 15.0661C5.88875 20.7711 10.2425 24.1936 15.0025 24.1936H14.9975Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}