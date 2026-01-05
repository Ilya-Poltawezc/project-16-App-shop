import styles from './SectionTeam.module.scss';
import clsx from 'clsx';
import { TEAM } from './team.data';
import FigureTeamIcon from '../../IconsComponents/FigureTeamIcon';

export default function SectionTeam() {
    return (
        <section className={styles.team}>
            <FigureTeamIcon />
            <div className={clsx('container', styles.team__div)}>
                <h2 className={styles.team__div__title}>Our team</h2>
                <div className={styles.team__div__block}>
                    {TEAM.map(({id, image, name, role}) => (
                        <article key={id} className={styles.team__div__card}>
                            <img
                                className={styles.team__div__card__img} 
                                src={image} 
                                alt="" />
                            <p className={styles.team__div__card__name}>{name}</p>
                            <p className={styles.team__div__card__role}>{role}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}