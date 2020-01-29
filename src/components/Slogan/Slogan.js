import React from 'react';
import mod from './Slogan.module.sass';
import Fade from "react-reveal/Fade";

function Slogan({slogan}) {
  return (
    <div className={mod.articles}>
      <Fade bottom>
          <div className={mod.container}>
              <div className={mod.articlesMainBlock}>
                  <div className={mod.articlesTitle}>{slogan.title}</div>
                  <button className={mod.articlesButton}><a href="#contacts">{slogan.button}</a></button>
              </div>
          </div>
      </Fade>
    </div>
  );
}

export default Slogan;
