import React from 'react';
import cl from './components.module.css';
import ProfileItem from "./ProfileItem";
import InfoItem from "./InfoItem";
import classes from "./components.module.css";

const RightBar = ({info}) => {
    return (
        <div className={cl.rightBar}>
            <div className={classes.header}>
                <div>
                    <h2>Olia Rodionova</h2>
                    <h4 className={classes.position}>Student KPI</h4>
                </div>
            </div>

            {info.map((item, index) => {
                console.log(item)
                switch(item.id)
                {
                    case "profile":
                        return <ProfileItem key={index} profile={item}/>

                    case "info":
                        return <InfoItem key={index} info={item}/>
                }
            })}

        </div>
    );
};

export default RightBar;
