import React from 'react';
import mod from './Projects.module.sass';

function Project({project}) {

    let front, bottom;
    switch (project.id) {
        case 1:
            front = mod.front1;
            bottom = mod.bottom1;
            break;
        case 2:
            front = mod.front2;
            bottom = mod.bottom2;
            break;
        case 3:
            front = mod.front3;
            bottom = mod.bottom3;
            break;
        case 4:
            front = mod.front4;
            bottom = mod.bottom4;
            break;
        case 5:
            front = mod.front5;
            bottom = mod.bottom5;
            break;
        default:
            front = mod.front1;
            bottom = mod.bottom1;
            break;
    }

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
