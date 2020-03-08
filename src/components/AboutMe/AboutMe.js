import React from 'react';
import mod from './AboutMe.module.sass';
import Tilt from 'react-tilt';
import TypedReact from "../Typed/Typed";
import Fade from "react-reveal/Fade";

let AboutMe = ({aboutMe}) => {

    let text = aboutMe.descriptionTitle.secondElement;

    return (
        <div className={mod.aboutMe} id='aboutMe'>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.aboutMeTitle}>
                        {aboutMe.title}
                        <span>{aboutMe.underTitle}</span>
                    </div>
                    <div className={mod.aboutMeDescriptionBlock}>
                        <Tilt className={mod.tilt} options={{ max : 25 }}  >
                            <div className={mod.aboutMePhoto}>
                                <img src={aboutMe.photo} alt="aboutMe"/>
                            </div>
                        </Tilt>
                        <div className={mod.aboutMeDescription}>
                            <h4 className={mod.aboutMeDescriptionTitle}>
                                {aboutMe.descriptionTitle.firstElement}
                                <span><TypedReact strings={[text[0], text[1], text[2]]}/></span>
                            </h4>
                            <p className={mod.aboutMeDescriptionText}>
                                {aboutMe.descriptionText.firstPart}
                                <span>{aboutMe.descriptionText.secondPart}</span>
                                {aboutMe.descriptionText.thirdPart}
                            </p>
                            <div className={mod.aboutMeInformation}>
                                <div className={mod.aboutMeInformationBlock}>
                                    <div className={mod.aboutMeInformationElement1}>
                                        {aboutMe.information.informationTitle1.map(el => {
                                                return <div key={el.id}>{el.title}</div>}
                                        )}
                                    </div>
                                    <div className={mod.aboutMeInformationElement2}>
                                        {aboutMe.information.informationText1.map(el => {
                                                return <div key={el.id}>{el.text}</div>}
                                        )}
                                    </div>
                                    <div className={mod.aboutMeInformationElement1}>
                                        {aboutMe.information.informationTitle2.map(el => {
                                                return <div key={el.id}>{el.title}</div>}
                                        )}
                                    </div>
                                    <div className={mod.aboutMeInformationElement2}>
                                        {aboutMe.information.informationText2.map(el => {
                                                return <div key={el.id}>{el.text}</div>}
                                        )}
                                    </div>
                                </div>
                                <div className={mod.aboutMeButtons}>
                                    <button className={mod.aboutMeDownloadCVButton}>
                                        <a href="CV.pdf" download>{aboutMe.buttons.first}</a>
                                    </button>
                                    <button className={mod.aboutMeSendMessageButton}>
                                        <a href="#contacts">{aboutMe.buttons.second}</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AboutMe;
