import React from 'react';
import mod from './Main.module.sass';
import TypedReact from "../Typed/Typed";

function Main({main}) {

    let specialize = main.specialize;
    let text = specialize.secondElement;

    return (
        <div className={mod.main}>
            <div className={mod.container}>
                <div className={mod.mainDescription}>
                    <div className={mod.mainPhotoContainer}>
                        <div className={mod.mainPhoto}></div>
                    </div>
                    <div className={mod.mainName}>{main.name} <span>{main.lastName}</span></div>
                    <h1 className={mod.mainSpecialize}>{specialize.firstElement}
                        <span> <TypedReact strings={[text[0], text[1], text[2]]}/></span></h1>
                </div>
            </div>
        </div>
    );
}

export default Main;
