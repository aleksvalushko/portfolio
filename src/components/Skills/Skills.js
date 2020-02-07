import React from 'react';
import mod from './Skills.module.sass';
import Skill from "./Skill";
import Fade from "react-reveal/Fade";
import react from '../../images/skills/react.svg';
import redux from '../../images/skills/redux.svg';
import sass from '../../images/skills/sass.svg';
import html5 from '../../images/skills/html5.svg';
import json from '../../images/skills/json.svg';
import js from '../../images/skills/js.svg';

function Skills({skills}) {

    let level = skills.level;

    return (
        <div className={mod.skills} id='skills'>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.skillsDescription}>
                        <div className={mod.skillsDescriptionTitle}>{skills.title}</div>
                        <div className={mod.skillsDescriptionText}>{skills.descriptionText}</div>
                    </div>
                    <div className={mod.skillsLevel}>
                        {
                            level.map(el => {
                                return <Skill title={el.title} experience={el.experience} percent={el.percent} key={el.id}/>
                            })
                        }
                    </div>
                </div>
                {/*<div className={mod.container}>
                    <div className={mod.skillsDescription}>Мои скиллы</div>
                    <div className={mod.skills}>
                        <div><img src={react} alt="react"/></div>
                        <div><img src={redux} alt="redux"/></div>
                        <div><img src={js} alt="js"/></div>
                        <div><img src={html5} alt="html5"/></div>
                        <div><img src={sass} alt="sass"/></div>
                        <div><img src={json} alt="json"/></div>
                    </div>
                </div>*/}
            </Fade>
        </div>
    );
}

export default Skills;
