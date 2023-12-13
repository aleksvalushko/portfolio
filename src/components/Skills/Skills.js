import React from 'react';
import styles from './Skills.module.scss';
import Fade from "react-reveal/Fade";

let Skills = ({skills}) => {

    return (
        <Fade bottom>
            <div className={styles.skills} id='skills'>
                <div className={styles.container}>
                    <div className={styles.skillsTitle}>{skills.title}</div>
                    <div className={styles.skillsLevel}>
                        {skills.skillsArray.map(item => {
                            return <div key={item.id} className={styles.skill}>
                                <img src={item.image} alt={item.alt}/>{item.title}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Skills;
