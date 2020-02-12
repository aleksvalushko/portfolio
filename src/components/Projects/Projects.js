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
                            <a href="#" className={mod.projectsItemImage1}>
                                <h2>TODOLIST</h2>
                                <div className={mod.top}>
                                    <div className={`${mod.front1} ${mod.face}`}></div>
                                    <div className={`${mod.back} ${mod.face}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad
                                        adipisci aliquam consectetur cupiditate, dicta doloremque doloribus earum magnam,
                                        maiores nobis omnis, quae quas reprehenderit soluta tempora tenetur ut!
                                    </div>
                                </div>
                                <div className={mod.bottom1}></div>
                            </a>
                            <a href="#" className={mod.projectsItemImage2}>
                                <h2>Social Network</h2>
                                <div className={mod.top}>
                                    <div className={`${mod.front2} ${mod.face}`}></div>
                                    <div className={`${mod.back} ${mod.face}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab ad
                                        adipisci aliquam consectetur cupiditate, dicta doloremque doloribus earum magnam,
                                        maiores nobis omnis, quae quas reprehenderit soluta tempora tenetur ut!
                                    </div>
                                </div>
                                <div className={mod.bottom2}></div>
                            </a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;
