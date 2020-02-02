import React from 'react';
import mod from './Main.module.sass';
import TypedReact from "../Typed/Typed";
import doubleArrowDown from '../../images/doubleArrowDown.svg';

function Main({main}) {

    let specialize = main.specialize;
    let text = specialize.secondElement;

    return (
        <div className={mod.main} id='main'>
            <div className={mod.container}>
                <div className={mod.mainDescription}>
                    <div className={mod.mainPhotoContainer}>
                        <div className={mod.mainPhoto}></div>
                    </div>
                    <div className={mod.mainName}>{main.name} <span>{main.lastName}</span></div>
                    <h1 className={mod.mainSpecialize}>{specialize.firstElement}
                        <span><TypedReact strings={text.map( el => {return el})}/></span>
                    </h1>
                    <a href='#aboutMe' className={mod.mainArrow}><img src={doubleArrowDown} alt="doubleArrowDown"/></a>
                </div>
            </div>
        </div>
    );
}

export default Main;
