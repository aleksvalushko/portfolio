import React from 'react';
import mod from './Projects.module.sass';

function Project({project}) {

    let front = (project.id === 1) ? mod.front1 : mod.front2;
    let bottom = (project.id === 1) ? mod.bottom1 : mod.bottom2;

    return (
        <div>
            <a href={project.link} className={mod.projectsItemImage}>
                <h2>{project.title}</h2>
                <div className={mod.top}>
                    <div className={`${front} ${mod.face}`}></div>
                    <div className={`${mod.back} ${mod.face}`}>{project.text}</div>
                </div>
                <div className={bottom}></div>
            </a>

        </div>
    );
}

export default Project;
