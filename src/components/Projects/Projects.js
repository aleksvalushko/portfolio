import React from 'react';
import mod from './Projects.module.sass';
import Fade from "react-reveal/Fade";
import Project from "./Project";

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
                            {
                                projects.project.map( el => {
                                    return <Project key={el.id} project={el}/>
                                })
                            }
                            {/*<a href="#" className={mod.projectsItemImage1}>
                                <h2>{projects.projectOne.title}</h2>
                                <div className={mod.top}>
                                    <div className={`${mod.front1} ${mod.face}`}></div>
                                    <div className={`${mod.back} ${mod.face}`}>{projects.projectOne.text}</div>
                                </div>
                                <div className={mod.bottom1}></div>
                            </a>
                            <a href="#" className={mod.projectsItemImage2}>
                                <h2>{projects.projectTwo.title}</h2>
                                <div className={mod.top}>
                                    <div className={`${mod.front2} ${mod.face}`}></div>
                                    <div className={`${mod.back} ${mod.face}`}>{projects.projectTwo.text}</div>
                                </div>
                                <div className={mod.bottom2}></div>
                            </a>*/}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
