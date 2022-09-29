import React from 'react';
import classes from './components.module.css';

const SkillItem = ({skill}) => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{skill.title}</h2>
            <ul>
                {skill.content.map((content, index) => {
                    return(
                        <li key={index} className={classes.skill__content}>
                            <h5>{content.title}</h5>
                            <div className={classes.point__holder1} >
                                {
                                    [...Array(5)].map((_, index) => <div key={index} className={classes.point1}/>)
                                }

                            <div className={classes.point__holder} >
                                {
                                    [...Array(content.point)].map((_, index) => <div key={index} className={classes.point}/>)
                                }
                            </div>
                            </div>
                        </li>
                        )
                })}
            </ul>
        </div>
    );
};

export default SkillItem;
