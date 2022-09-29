import React from 'react';
import classes from './components.module.css';

const SkillItem = ({skill}) => {


    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{skill.title}</h2>
            <ul>
                {skill.content.map(content => {
                    return(
                        <li className={classes.skill__content}>
                            <h5>{content.title}</h5>
                            <div className={classes.point__holder1} >
                                {

                                    [...Array(5)].map(() => <div className={classes.point1}></div>)
                                }

                            <div className={classes.point__holder} >
                                {

                                    [...Array(content.point)].map(() => <div className={classes.point}></div>)
                                    // ('<div className={classes.point}></div>').repeat(content.points)
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
