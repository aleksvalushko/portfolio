import React from 'react';
import mod from './Footer.module.sass';
import linkedIn from '../../images/linkedin3.svg';
import twitter from '../../images/twitter3.svg';
import facebook from '../../images/facebook3.svg';
import github from '../../images/github3.svg';

function Footer() {
    return (
        <div className={mod.footer}>
            <div className={mod.container}>
                <div className={mod.footerAboutMe}>Алексей Валушко</div>
                <div className={mod.footerMainBlock}>
                    <div className={mod.footerItem}><a href="#"><img src={linkedIn} alt="LinkedIn"/></a></div>
                    <div className={mod.footerItem}><a href="#"><img src={twitter} alt="Twitter"/></a></div>
                    <div className={mod.footerItem}><a href="#"><img src={facebook} alt="Facebook"/></a></div>
                    <div className={mod.footerItem}><a href="#"><img src={github} alt="Skype"/></a></div>
                </div>
                <div className={mod.footerCopywriter}>2019</div>
            </div>
        </div>
    );
}

export default Footer;