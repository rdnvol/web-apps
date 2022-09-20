import React from 'react';
import cl from './components.module.css';
import SkillItem from "./SkillItem";
import ProfileItem from "./ProfileItem";

const RightBar = ({info}) => {
    return (
        <div className={cl.rightBar}>

            <h4>Olia Rodionova</h4>

            {info.map((item, index) => {
                // console.log(item)
                switch(item.id)
                {
                    case "profile":
                        return <ProfileItem key={index} profile={item}/>

                    case "info":
                        // return <SkillItem key={index} skill={item}/>
                }
            })}

        </div>
    );
};

export default RightBar;
