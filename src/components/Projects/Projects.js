import React from 'react';
import mod from './Projects.module.sass';
import Fade from "react-reveal/Fade";

function Projects({projects}) {
    return (
        <div className={mod.projects} id='projects'>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.projectsMainBlock}>
                        <div className={mod.projectsTitle}>
                            {projects.title}
                            <span>{projects.underTitle}</span>
                        </div>
                        <div className={mod.projectsItems}>
                            <a href="#" className={mod.projectsItemImage1} title='TodoList'></a>
                            {/*<a href="#" className={mod.projectsItemImage1} title='TodoList'></a>*/}
                            <a href="#" className={mod.projectsItemImage2} title='SocialNetwork'></a>
                            {/*<a href="#" className={mod.projectsItemImage2} title='SocialNetwork'></a>*/}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
