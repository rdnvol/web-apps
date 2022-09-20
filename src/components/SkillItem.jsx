import React from 'react';
import classes from './components.module.css';

const SkillItem = () => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>Title</h2>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};

export default SkillItem;
