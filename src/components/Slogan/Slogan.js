import React from 'react';
import mod from './Slogan.module.sass';

function Slogan({slogan}) {
  return (
    <div className={mod.articles}>
      <div className={mod.container}>
        <div className={mod.articlesMainBlock}>
          <div className={mod.articlesTitle}>{slogan.title}</div>
          <button className={mod.articlesButton}>{slogan.button}</button>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
