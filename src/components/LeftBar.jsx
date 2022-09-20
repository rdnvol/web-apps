import React from 'react';
import classes from './components.module.css';
import SkillItem from "./SkillItem";
import DetailsItem from "./DetailsItem";
// import logo from 'public/img/olia.jpg';

const LeftBar = ({skills}) => {
    return (
        <div className={classes.leftBar}>
            <img src="https://via.placeholder.com/150C/O https://placeholder.com/" alt="" className={classes.logo__img}/>
            {skills.map((item, index) => {
                switch(item.id)
                {
                    case "details":
                        return <DetailsItem key={index} detail={item}/>

                    case "skills":
                        return <SkillItem key={index} skill={item}/>
                }
            })}
            {/*<SkillItem>*/}
        </div>
    );
};

export default LeftBar;
