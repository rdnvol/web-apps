import React from 'react';
import classes from './components.module.css';
import SkillItem from "./SkillItem";
// import logo from 'public/img/olia.jpg';

const LeftBar = () => {
    return (
        <div className={classes.leftBar}>
            <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="" className={classes.logo__img}/>

            <SkillItem></SkillItem>
        </div>
    );
};

export default LeftBar;
