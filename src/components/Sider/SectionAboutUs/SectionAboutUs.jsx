import styles from './SectionAboutUs.module.scss';
import clsx from 'clsx';
import sectionAbout from '../../../assets/images/sectionAbout.png'
import FigureIcon from '../../IconsComponents/FigyreIcon';

export default function SectionAboutUs() {
    return (
        <section id='aboutus' className={styles.about}>
            <FigureIcon />
            <div className={clsx('container', styles.about__block)}>
                <div className={styles.about__title}>
                    <h2 className={styles.about__h2}>A few words about us</h2>
                    <p className={styles.about__p}>Sport keeps us fit. It teaches discipline. It unites us. Through sport, we can change lives. Including through the inspiring stories of athletes. To help you rise up and move forward.</p>
                    <p className={styles.about__p2}>SneakMax</p>
                </div>
                <div>
                    <img 
                    className={styles.about__img}
                    src={sectionAbout} 
                    alt="AboutUs" />
                </div>
            </div>
        </section>
    )
}