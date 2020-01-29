import React from 'react';
import mod from './Skills.module.sass';
import Skill from "./Skill";
import Fade from "react-reveal/Fade";

function Skills({skills}) {

    let level = skills.level;
   /* let skillsLevelLine;
    if(skills.level.percent == '90%') {
        skillsLevelLine = 'mod.skillsLevelItemLine11';
    } else if(skills.level.percent == '80%') {
        skillsLevelLine = 'mod.skillsLevelItemLine12';
    } else if(skills.level.percent == '50%') {
        skillsLevelLine = 'mod.skillsLevelItemLine13';
    } else if(skills.level.percent == '55%') {
        skillsLevelLine = 'mod.skillsLevelItemLine14';
    }*/
    /*let skillsLevelLine = level.map( el => {
        return el.percent;
    });*/

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
                        {/*<div className={mod.skillsLevelItems}>
                        <div className={mod.skillsLevelItem}>
                            <div className={mod.skillsLevelItemTitle}>
                                <span>{level.firstTechnology.title}</span>{level.firstTechnology.experience}</div>
                            <div className={mod.skillsLevelItemPercent}>{level.firstTechnology.percent}</div>
                        </div>
                        <div className={mod.skillsConatainerLine}>
                            <div className={mod.skillsLevelItemLine11}></div>
                            <div className={mod.skillsLevelItemLine12}></div>
                        </div>
                    </div>
                    <div className={mod.skillsLevelItems}>
                        <div className={mod.skillsLevelItem}>
                            <div className={mod.skillsLevelItemTitle}>
                                <span>{level.secondTechnology.title}</span>{level.secondTechnology.experience}</div>
                            <div className={mod.skillsLevelItemPercent}>{level.secondTechnology.percent}</div>
                        </div>
                        <div className={mod.skillsLevelItemLine2}></div>
                    </div>
                    <div className={mod.skillsLevelItems}>
                        <div className={mod.skillsLevelItem}>
                            <div className={mod.skillsLevelItemTitle}>
                                <span>{level.thirdTechnology.title}</span>{level.thirdTechnology.experience}</div>
                            <div className={mod.skillsLevelItemPercent}>{level.thirdTechnology.percent}</div>
                        </div>
                        <div className={mod.skillsLevelItemLine3}></div>
                    </div>
                    <div className={mod.skillsLevelItems}>
                        <div className={mod.skillsLevelItem}>
                            <div className={mod.skillsLevelItemTitle}>
                                <span>{level.fourthTechnology.title}</span>{level.fourthTechnology.experience}</div>
                            <div className={mod.skillsLevelItemPercent}>{level.fourthTechnology.percent}</div>
                        </div>
                        <div className={mod.skillsLevelItemLine4}></div>
                    </div>*/}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
