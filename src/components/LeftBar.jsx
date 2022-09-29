import React from 'react';
import classes from './components.module.css';
import SkillItem from "./SkillItem";
import DetailsItem from "./DetailsItem";
import userImage from 'img/olia.jpg';

const LeftBar = ({skills}) => {
    return (
        <div className={classes.leftBar}>
            <div className={classes.header}>
                <div className={classes.user__img__holder}>
                    <img src={userImage} alt="" className={classes.user__img}/>
                </div>

            </div>
            {skills.map((item, index) => {
                switch(item.id)
                {
                    case "details":
                        return <DetailsItem key={index} detail={item}/>

                    case "skills":
                        return <SkillItem key={index} skill={item}/>
                }
            })}
        </div>
    );
};

export default LeftBar;
