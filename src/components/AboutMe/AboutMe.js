import React from 'react';
import styles from './AboutMe.module.scss';
import TypedReact from "../Typed/Typed";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";

let AboutMe = ({aboutMe}) => {

    let text = aboutMe.descriptionTitle.secondElement;

    return (
        <Fade bottom>
            <div className={styles.aboutMe} id='aboutMe'>
                <div className={styles.container}>
                    <div className={styles.aboutMeTitle}>
                        {aboutMe.title}
                        <span>{aboutMe.underTitle}</span>
                    </div>
                    <div className={styles.aboutMeDescriptionBlock}>
                        <div className={styles.aboutMeDescription}>
                            <h4 className={styles.aboutMeDescriptionTitle}>
                                {aboutMe.descriptionTitle.firstElement}
                                <span><TypedReact strings={[text[0], text[1], text[2]]}/>.</span>
                            </h4>
                            <p className={styles.aboutMeDescriptionText}>
                                {aboutMe.descriptionText.firstPart}
                                <span>{aboutMe.descriptionText.secondPart}</span>
                                {aboutMe.descriptionText.thirdPart}
                            </p>
                            <div className={styles.aboutMeInformation}>
                                <div className={styles.aboutMeInformationBlock}>
                                    <div className={styles.aboutMeInformationElement1}>
                                        {aboutMe.information.informationTitle1.map(el => {
                                                return <div key={el.id}>{el.title}</div>
                                            }
                                        )}
                                    </div>
                                    <div className={styles.aboutMeInformationElement2}>
                                        {aboutMe.information.informationText1.map(el => {
                                                return <div key={el.id}>{el.text}</div>
                                            }
                                        )}
                                    </div>
                                    <div className={styles.aboutMeInformationElement1}>
                                        {aboutMe.information.informationTitle2.map(el => {
                                                return <div key={el.id}>{el.title}</div>
                                            }
                                        )}
                                    </div>
                                    <div className={styles.aboutMeInformationElement2}>
                                        {aboutMe.information.informationText2.map(el => {
                                                return <div key={el.id}>{el.text}</div>
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className={styles.aboutMeButtons}>
                                    <button className={styles.aboutMeDownloadCVButton}>
                                        {aboutMe.title === 'ABOUT ME'
                                        ? <Link to="./CV_26_11_2020_Eng.pdf" target='_blank' download>{aboutMe.buttons.first}</Link>
                                        : <Link to="./CV_26_11_2020.pdf" target='_blank' download>{aboutMe.buttons.first}</Link>}
                                    </button>
                                    <button className={styles.aboutMeSendMessageButton}>
                                        <a href={aboutMe.anchor}>{aboutMe.buttons.second}</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default AboutMe;
