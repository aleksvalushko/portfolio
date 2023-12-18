import React from 'react';
import styles from './Projects.module.scss';
import Fade from "react-reveal/Fade";
import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <Fade bottom>
            <div className={styles.projects} id='projects'>
                <div className={styles.container}>
                    <div className={styles.mainBlock}>
                        <div className={styles.title}>
                            {projects.title}
                            <span>{projects.underTitle}</span>
                        </div>
                        <div className={styles.items}>
                            {projects.project.map(el => <Project key={el.id} project={el}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Projects;
