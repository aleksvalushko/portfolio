import React from 'react';
import mod from './Footer.module.sass';
import linkedIn from '../../images/linkedin3.svg';
import twitter from '../../images/twitter3.svg';
import facebook from '../../images/facebook3.svg';
import github from '../../images/github3.svg';
import upArrow from '../../images/up-arrow.svg';
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div className={mod.footer}>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.footerMainBlock}>
                        <div className={mod.footerItem}>
                            <a href="https://www.linkedin.com/in/aleksey-valushko-37333816b/" target='_blank'>
                                <img src={linkedIn} alt="LinkedIn"/>
                            </a>
                        </div>
                        <div className={mod.footerItem}>
                            <a href="https://twitter.com/joker_aleks" target='_blank'>
                                <img src={twitter} alt="Twitter"/>
                            </a>
                        </div>
                        <div className={mod.footerItem}>
                            <a href="https://www.facebook.com/aleks.valushko.1" target='_blank'>
                                <img src={facebook} alt="Facebook"/>
                            </a>
                        </div>
                        <div className={mod.footerItem}>
                            <a href="https://github.com/aleksvalushko" target='_blank'>
                                <img src={github} alt="Github"/>
                            </a>
                        </div>
                    </div>
                    <div className={mod.footerCopywriter}>© Copyright 2020. All Rights are Reserved.</div>
                </div>
                <a href='#main' className={mod.anchor}><img src={upArrow} alt="arrow"/></a>
            </Fade>
        </div>
    );
}

export default Footer;