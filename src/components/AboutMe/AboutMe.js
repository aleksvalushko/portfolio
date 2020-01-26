import React from 'react';
import mod from './AboutMe.module.sass';
import Tilt from 'react-tilt';

function AboutMe({aboutMe}) {
    return (
        <div className={mod.aboutMe}>
            <div className={mod.container}>
                <div className={mod.aboutMeTitle}>
                    {aboutMe.title}
                    <span>{aboutMe.underTitle}</span>
                </div>
                <div className={mod.aboutMeDescriptionBlock}>
                    <Tilt className={mod.tilt} options={{ max : 25 }} style={{ height: 600, width: 600 }} >
                        <div className={mod.aboutMePhoto}>
                            <img src={aboutMe.photo} alt="aboutMe"/>
                        </div>
                    </Tilt>
                    <div className={mod.aboutMeDescription}>
                        <h4 className={mod.aboutMeDescriptionTitle}>
                            {aboutMe.descriptionTitle.firstElement}<span>{aboutMe.descriptionTitle.secondElement}</span>
                        </h4>
                        <p className={mod.aboutMeDescriptionText}>
                            {aboutMe.descriptionText}
                        </p>
                        <div className={mod.aboutMeInformation}>
                            <div className={mod.aboutMeInformationBlock}>
                                <div className={mod.aboutMeInformationElement1}>
                                    {aboutMe.information.informationTitle1.map(el => {
                                            return <div>
                                                {el.title}
                                            </div>
                                        }
                                    )}
                                </div>
                                <div className={mod.aboutMeInformationElement2}>
                                    {aboutMe.information.informationText1.map(el => {
                                            return <div>
                                                {el.text}
                                            </div>
                                        }
                                    )}
                                </div>
                                <div className={mod.aboutMeInformationElement1}>
                                    {aboutMe.information.informationTitle2.map(el => {
                                            return <div>
                                                {el.title}
                                            </div>
                                        }
                                    )}
                                </div>
                                <div className={mod.aboutMeInformationElement2}>
                                    {aboutMe.information.informationText2.map(el => {
                                            return <div>
                                                {el.text}
                                            </div>
                                        }
                                    )}
                                </div>
                            </div>
                            {/*<div className={mod.aboutMeInformationText}>
                                    <div className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.second}</div>
                                    <div className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.second}</div>
                                </div>
                                <div className={mod.aboutMeInformationText}>
                                    <div className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.third}</div>
                                    <div className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.third}</div>
                                </div>
                                <div className={mod.aboutMeInformationText}>
                                    <div className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.fourth}</div>
                                    <div className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.fourth}</div>
                                </div>
                            </div>*/}
                            {/*<div className={mod.aboutMeInformationBlock}>
                                    <div className={mod.aboutMeInformationText}>
                                        <div
                                            className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.fifth}</div>
                                        <div
                                            className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.fifth}</div>
                                    </div>
                                    <div className={mod.aboutMeInformationText}>
                                        <div
                                            className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.sixth}</div>
                                        <div
                                            className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.sixth}</div>
                                    </div>
                                    <div className={mod.aboutMeInformationText}>
                                        <div
                                            className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.seventh}</div>
                                        <div
                                            className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.seventh}</div>
                                    </div>
                                    <div className={mod.aboutMeInformationText}>
                                        <div
                                            className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.eighth}</div>
                                        <div
                                            className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.eighth}</div>
                                    </div>
                                    <div className={mod.aboutMeInformationText}>
                                        <div
                                            className={mod.aboutMeInformationTextElement1}>{aboutMe.informationTitles.ninth}</div>
                                        <div
                                            className={mod.aboutMeInformationTextElement12}>{aboutMe.informationText.ninth}</div>
                                    </div>
                                </div>
                            </div>*/}
                            <div className={mod.aboutMeButtons}>
                                <button className={mod.aboutMeDownloadCVButton}>{aboutMe.buttons.first}</button>
                                <button className={mod.aboutMeSendMessageButton}>{aboutMe.buttons.second}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
