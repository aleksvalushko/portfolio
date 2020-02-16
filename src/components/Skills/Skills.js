import React from 'react';
import mod from './Skills.module.sass';
import Fade from "react-reveal/Fade";
import react from '../../images/skills/react2.svg';
import redux from '../../images/skills/redux2.svg';
import sass from '../../images/skills/sass2.svg';
import html5 from '../../images/skills/html52.svg';
import json from '../../images/skills/json2.svg';
import js from '../../images/skills/js6.svg';
import github from '../../images/skills/github2.svg';

let Skills = ({skills}) => {

    return (
        <div className={mod.skills} id='skills'>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.skillsTitle}>{skills.title}</div>
                    <div className={mod.skillsLevel}>
                        <div className={mod.skill1}><img src={react} alt="react"/>React</div>
                        <div className={mod.skill2}><img src={redux} alt="redux"/>Redux</div>
                        <div className={mod.skill3}><img src={js} alt="js"/>Java Script</div>
                        <div className={mod.skill4}><img src={html5} alt="html5"/>HTML 5</div>
                        <div className={mod.skill5}><img src={sass} alt="sass"/>SASS</div>
                        <div className={mod.skill6}><img src={json} alt="json"/>JSON</div>
                        <div className={mod.skill7}><img src={github} alt="github"/>GitHub</div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Skills;
