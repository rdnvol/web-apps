import React from 'react';
import classes from "./components.module.css";

const DetailsItem = ({detail}) => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{detail.title}</h2>
            <ol>
                {detail.info.map(content => {
                    return(
                        <li>
                            <h5>{content.title}</h5>
                            <ul>
                                {content.content.map(item => {
                                    return <li>{item}</li>
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
