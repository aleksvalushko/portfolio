import React from 'react';
import mod from './Header.module.sass';

function Header({header}) {
  return (
    <div className={mod.header}>
      <div className={mod.container}>
        <div className={mod.nav}>
          <a href='#' className={mod.link}>{header.link1}</a>
          <a href='#' className={mod.link}>{header.link2}</a>
          <a href='#' className={mod.link}>{header.link3}</a>
          <a href='#' className={mod.link}>{header.link4}</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
