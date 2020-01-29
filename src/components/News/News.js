import React from 'react';
import mod from './News.module.sass';
import Fade from "react-reveal/Fade";

function News({news}) {
    return (
        <div className={mod.news}>
            <Fade bottom>
                <div className={mod.container}>
                    <div className={mod.newsMainBlock}>
                        <div className={mod.newsTitle}>
                            {news.title}
                            <span>{news.underTitle}</span>
                        </div>
                        <div className={mod.newsItems}>
                            {
                                news.newsArray.map(el => {
                                    return <div className={mod.newsItem} key={el.id}>
                                        <div className={mod.newsImage}><a href="#"><img src={el.image} alt="firstNews"/></a></div>
                                        <div className={mod.newsBlock}>
                                            <div className={mod.newsItemTitle}><a href="#">{el.title}</a></div>
                                            <div className={mod.newsText}><div>{el.text}</div></div>
                                            <button className={mod.newsButton}>{el.button}</button>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default News;
