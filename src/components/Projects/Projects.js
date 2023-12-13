import React from 'react';
import styles from './Projects.module.scss';
import Fade from "react-reveal/Fade";
import Project from "./Project";

let Projects = ({projects}) => {
    return (
        <Fade bottom>
            <div className={styles.projects} id='projects'>
                <div className={styles.container}>
                    <div className={styles.projectsMainBlock}>
                        <div className={styles.projectsTitle}>
                            {projects.title}
                            <span>{projects.underTitle}</span>
                        </div>
                        <div className={styles.projectsItems}>
                            {projects.project.map(el => <Project key={el.id} project={el}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Projects;
