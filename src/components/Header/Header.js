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
                    {header.map( item => {
                        return <a key={item.id} href={item.anchor} className={mod.link}>{item.link}</a>
                    })}
                </div>
                <button className={activeButton} onClick={() => {
                    setActiveMode(!activeMode);
                    headerMenu()
                }}><span></span></button>
              <div className={mod.headerMenu} id='menu'>
                <div className={mod.menuBlocks}>
                  <div className={mod.menuItem}>
                      {header.map( item => {
                          return <a key={item.id} href={item.anchor} className={mod.link} onClick={ () => {
                              setActiveMode(!activeMode);
                              headerMenu()}}>{item.link}</a>
                      })}
                  </div>
                  <div className={mod.menuLanguage}>
                    <a onClick={ () => {setEditMode('ru')}}>ru</a>
                    <a onClick={ () => {setEditMode('en')}}>en</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Header;
