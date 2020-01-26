import React from 'react';
import mod from './Skills.module.sass';

function Skill({title, percent,experience}) {

    let skillsLevelLine = (percent === '90%') ? `${mod.skillsLevelItemLine11}`
        : (percent === '80%') ? `${mod.skillsLevelItemLine12}`
            : (percent === '50%') ? `${mod.skillsLevelItemLine13}`
                : (percent === '55%') ? `${mod.skillsLevelItemLine14}`: '';

    return (
        <div className={mod.skillsLevelItems}>
            <div className={mod.skillsLevelItem}>
                <div className={mod.skillsLevelItemTitle}>
                    <span>{title}</span>{experience}
                </div>
                <div className={mod.skillsLevelItemPercent}>{percent}</div>
            </div>
            <div className={mod.skillsContainerLine}>
                <div className={mod.skillsLevelItemLine1}></div>
                <div className={skillsLevelLine}></div>
            </div>
        </div>)
}
export default Skill;
