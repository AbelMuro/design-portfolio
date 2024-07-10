import React from 'react';
import * as styles from './styles.module.css';
import icons from './icons';

function Skills() {
    return(
        <section className={styles.skills}>
            <div className={styles.skills_graphics}>
                <img src={icons['graphics']}/>
                <p>
                    Graphic Design
                </p>
            </div>
            <div className={styles.skills_ui}>
                <img src={icons['ui']}/>
                <p>
                    UI/UX
                </p>
            </div>
            <div className={styles.skills_apps}>
                <img src={icons['apps']}/>
                <p>
                    Apps
                </p>
            </div>
            <div className={styles.skills_photography}>
                <img src={icons['photography']}/>
                <p>
                    Photography
                </p>
            </div>
            <div className={styles.skills_illustration}>
                <img src={icons['illustrations']}/>
                <p>
                    Illustrations
                </p>
            </div>
            <div className={styles.skills_motion}>
                <img src={icons['motion']}/>
                <p>
                    Motion Graphics
                </p>
            </div>           
        </section>
    )
}

export default Skills;