import React from 'react';
import classes from './components.module.css';

const SkillItem = ({skill}) => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{skill.title}</h2>
            <ul>
                {skill.content.map(content => {
                    return(
                        <li>
                            <h5>{content.title}</h5>
                            <h6>{content.point}</h6>
                        </li>
                        )
                })}
            </ul>
        </div>
    );
};

export default SkillItem;
