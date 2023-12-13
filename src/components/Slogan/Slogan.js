import React from 'react';
import styles from './Slogan.module.scss';
import Fade from "react-reveal/Fade";

let Slogan = ({slogan}) => {
  return (
    <div className={styles.articles}>
      <Fade bottom>
          <div className={styles.container}>
              <div className={styles.articlesMainBlock}>
                  <div className={styles.articlesTitle}>{slogan.title}</div>
                  <button className={styles.articlesButton}><a href={slogan.anchor}>{slogan.button}</a></button>
              </div>
          </div>
      </Fade>
    </div>
  );
};

export default Slogan;
