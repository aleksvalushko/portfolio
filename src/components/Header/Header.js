import React, {useState} from 'react';
import mod from './Header.module.sass';

let Header = ({header, setEditMode}) => {

  let [activeMode, setActiveMode] = useState(false);

  let active = activeMode ? `${mod.toggle} ${mod.toggleLines} ${mod.active}` : `${mod.toggle} ${mod.toggleLines}`;

  return (
    <div className={mod.header}>
      <div className={mod.container}>
        <div className={mod.language}>
          <a onClick={ () => {setEditMode('ru')}}>ru</a>
          <a onClick={ () => {setEditMode('en')}}>en</a>
        </div>
        <div className={mod.nav}>
          <a href='#aboutMe' className={mod.link}>{header.link1}</a>
          <a href='#skills' className={mod.link}>{header.link2}</a>
          <a href='#projects' className={mod.link}>{header.link3}</a>
          <a href='#contacts' className={mod.link}>{header.link4}</a>
        </div>
        <button className={active} onClick={ () => {setActiveMode(true)} }><span></span></button>
      </div>
    </div>
  );
};

export default Header;
