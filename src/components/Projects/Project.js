import React from 'react';
import styles from './Projects.module.scss';

function Project({project}) {

    let front, bottom;
    switch (project.id) {
        case 1:
            front = styles.front1;
            bottom = styles.bottom1;
            break;
        case 2:
            front = styles.front2;
            bottom = styles.bottom2;
            break;
        case 3:
            front = styles.front3;
            bottom = styles.bottom3;
            break;
        case 4:
            front = styles.front4;
            bottom = styles.bottom4;
            break;
        case 5:
            front = styles.front5;
            bottom = styles.bottom5;
            break;
        case 6:
            front = styles.front6;
            bottom = styles.bottom6;
            break;
        default:
            front = styles.front1;
            bottom = styles.bottom1;
            break;
    }

    return (
        <div>
            <a href={project.link} className={styles.itemImage} target='_blank' rel="noopener noreferrer">
                <h2>{project.title}</h2>
                <div className={styles.top}>
                    <div className={`${front} ${styles.face}`}/>
                    <div className={`${styles.back} ${styles.face}`}>{project.text}</div>
                </div>
                <div className={bottom}/>
            </a>

        </div>
    );
}

export default Project;
