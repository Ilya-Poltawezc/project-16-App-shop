import styles from '../Sider/SectionTeam/SectionTeam.module.scss'

export default function FigureTeamIcon() {
    return (
        <div className={styles.team__svg}>
            <svg width="541" height="550" viewBox="0 0 541 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_105_0)">
                <circle cx="343" cy="343" r="343" transform="matrix(-1 0 0 1 686 -151)" fill="#F14F4F"/>
                </g>
                <g clipPath="url(#clip1_105_0)">
                <circle className={styles.team__svg__circle1} cx="439" cy="-14" r="321.5" transform="rotate(90 439 -14)" stroke="white" strokeOpacity="0.5"/>
                <circle className={styles.team__svg__circle2} cx="574.5" cy="401.5" r="148" transform="rotate(90 574.5 401.5)" stroke="white" strokeOpacity="0.5"/>
                </g>
                <defs>
                <clipPath id="clip0_105_0">
                <rect width="541" height="535" fill="white"/>
                </clipPath>
                <clipPath id="clip1_105_0">
                <rect width="550" height="424" fill="white" transform="translate(541 1.52588e-05) rotate(90)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    )
}