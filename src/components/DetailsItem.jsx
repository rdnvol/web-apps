import React from 'react';
import classes from "./components.module.css";

const DetailsItem = ({detail}) => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{detail.title}</h2>
            <ol>
                {detail.info.map((content, infoIndex) => {
                    return(
                        <li key={infoIndex} className={classes.skill__content}>
                            <h5 className={classes.skill__content__title}>{content.title}</h5>
                            <ul>
                                {content.content.map((item, contentIndex) => {
                                    return <li key={contentIndex} className={classes.skill__content__text}>{item}</li>
                                })}
                            </ul>
                            {}
                        </li>
                        )
                })}
            </ol>



        </div>
    );
};

export default DetailsItem;
