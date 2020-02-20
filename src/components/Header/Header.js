import React, {useState} from 'react';
import mod from './Header.module.sass';

let Header = ({header, setEditMode}) => {

    let [activeMode, setActiveMode] = useState(false);

    let activeButton = activeMode ? `${mod.toggle} ${mod.toggleLines} ${mod.active}` : `${mod.toggle} ${mod.toggleLines}`;

    let headerMenu = () => {
        activeMode
            ? document.querySelector('#menu').style.display = 'none'
            : document.querySelector('#menu').style.display = 'flex';
    };

    return (
        <div className={mod.header}>
            <div className={mod.container}>
                <div className={mod.language}>
                    <a onClick={() => {setEditMode('ru')}}>ru</a>
                    <a onClick={() => {setEditMode('en')}}>en</a>
                </div>
                <div className={mod.nav}>
                    <a href='#aboutMe' className={mod.link}>{header.link1}</a>
                    <a href='#skills' className={mod.link}>{header.link2}</a>
                    <a href='#projects' className={mod.link}>{header.link3}</a>
                    <a href='#contacts' className={mod.link}>{header.link4}</a>
                </div>
                <button className={activeButton} onClick={() => {
                    setActiveMode(!activeMode);
                    headerMenu()
                }}><span></span></button>
              <div className={mod.headerMenu} id='menu'>
                <div className={mod.menuBlocks}>
                  <div className={mod.menuItem}>
                    <a href='#aboutMe' className={mod.link} onClick={ () => {setActiveMode(!activeMode);
                        headerMenu()}}>{header.link1}</a>
                    <a href='#skills' className={mod.link} onClick={ () => {setActiveMode(!activeMode);
                        headerMenu()}}>{header.link2}</a>
                    <a href='#projects' className={mod.link} onClick={ () => {setActiveMode(!activeMode);
                        headerMenu()}}>{header.link3}</a>
                    <a href='#contacts' className={mod.link} onClick={ () => {setActiveMode(!activeMode);
                        headerMenu()}}>{header.link4}</a>
                  </div>
                  <div className={mod.menuLanguage}>
                    <a onClick={ () => {setEditMode('ru')}}>ru</a>
                    <a onClick={ () => {setEditMode('en')}}>en</a>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className={mod.headerMenu} id='menu'>
                <div>
                  <a href='#aboutMe'>{header.link1}</a>
                  <a href='#skills'>{header.link2}</a>
                  <a href='#projects'>{header.link3}</a>
                  <a href='#contacts'>{header.link4}</a>
                </div>
                <div>
                  <a onClick={() => {setEditMode('ru')}}>ru</a>
                  <a onClick={() => {setEditMode('en')}}>en</a>
                </div>
            </div>*/}
        </div>
    );
};

export default Header;
