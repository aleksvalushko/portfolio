import React from 'react';
import styles from './Footer.module.scss';
import Fade from "react-reveal/Fade";

const Footer = ({footer}) => {
    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    <div>{footer.author}</div>
                    <div className={styles.footerMainBlock}>
                        {footer.links.map( item => {
                            return <div key={item.id} className={`${styles.footerItem} ${styles.effect} ${styles.sub}`}>
                                <a href={item.link} target='_blank' rel="noopener noreferrer">
                                    <img src={item.image} alt={item.alt}/>
                                </a>
                            </div>
                        })}
                    </div>
                    <div className={styles.footerCopywriter}>{footer.copywrite}</div>
                </div>
                {/*<a href='#main' className={styles.anchor}><img src={upArrow} alt="arrow"/></a>*/}
            </Fade>
        </div>
    );
};

export default Footer;