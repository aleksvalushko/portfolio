import React from 'react';
import mod from './Footer.module.sass';
import upArrow from '../../images/up-arrow.svg';
import Fade from "react-reveal/Fade";

let Footer = ({footer}) => {
    return (
        <div className={mod.footer}>
            <Fade bottom>
                <div className={mod.container}>
                    <div>{footer.author}</div>
                    <div className={mod.footerMainBlock}>
                        {footer.links.map( item => {
                            return <div className={`${mod.footerItem} ${mod.effect} ${mod.sub}`}>
                                <a href={item.link} target='_blank'>
                                    <img src={item.image} alt={item.alt}/>
                                </a>
                            </div>
                        })}
                    </div>
                    <div className={mod.footerCopywriter}>{footer.copywrite}</div>
                </div>
                {/*<a href='#main' className={mod.anchor}><img src={upArrow} alt="arrow"/></a>*/}
            </Fade>
        </div>
    );
};

export default Footer;