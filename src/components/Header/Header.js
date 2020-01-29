import React from 'react';
import mod from './Header.module.sass';
import { Link, animateScroll as scroll } from "react-scroll";

function Header({header}) {
  return (
    <div className={mod.header}>
      <div className={mod.container}>
        <div className={mod.nav}>
          {/*<Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
              className={mod.link}
          >{header.link1}</Link>*/}
          <a href='#aboutMe' className={mod.link}>{header.link1}</a>
          <a href='#skills' className={mod.link}>{header.link2}</a>
          <a href='#projects' className={mod.link}>{header.link3}</a>
          <a href='#contacts' className={mod.link}>{header.link4}</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
