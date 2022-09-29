import React from 'react';
import classes from "./components.module.css";
import EducationItem from "./EducationItem";

const InfoItem = ({info}) => {
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{info.title}</h2>
            {
                info.educations.map((item, index) => {
                    return <EducationItem key={index} item={item}/>
                })
            }
        </div>
    );
};

export default InfoItem;
