import React from 'react';
import styles from './Main.module.scss';
import TypedReact from "../Typed/Typed";
import doubleArrowDown from '../../images/doubleArrowDown.svg';

const Main = ({main}) => {

    let specialize = main.specialize;
    let text = specialize.secondElement;

    return (
        <div className={styles.main} id='main'>
            <div className={styles.container}>
                <div className={styles.description}>
                    <div className={styles.photo}></div>
                    <div className={styles.name}>{main.name} <span>{main.lastName}</span></div>
                    <h1 className={styles.specialize}>{specialize.firstElement}
                        <span><TypedReact strings={text.map(el => el)}/></span>
                    </h1>
                    <a href={main.anchor} className={styles.doubleArrowDown}><img src={doubleArrowDown} alt="doubleArrowDown"/></a>
                </div>
            </div>
        </div>
    );
};

export default Main;
