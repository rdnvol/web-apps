import React from 'react';
import classes from "./components.module.css";

const ProfileItem = ({profile}) => {
    // console.log(profile);
    return (
        <div className={classes.skill__item}>
            <h2 className={classes.skill__title}>{profile.title}</h2>
            <h4 dangerouslySetInnerHTML={{__html:profile.mainInfo.replace(/\n/g, "<br />")}}/>

        </div>
    );
};

export default ProfileItem;
