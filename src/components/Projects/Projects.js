import React from 'react';
import mod from './Projects.module.sass';

function Projects({projects}) {
    return (
        <div className={mod.projects}>
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
        </div>
    );
}

export default Projects;
