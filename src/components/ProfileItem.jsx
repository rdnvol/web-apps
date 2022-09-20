import React from 'react';
import classes from "./components.module.css";

const ProfileItem = ({profile}) => {
    // console.log(profile);
    return (
        <div>
            <h2 className={classes.skill__title}>{profile.title}</h2>
            <p>
                {profile.mainInfo}
            </p>

        </div>
    );
};

export default ProfileItem;
