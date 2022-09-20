import React from 'react';
import cl from './components.module.css';
import SkillItem from "./SkillItem";

const RightBar = ({skills}) => {
    return (
        <div className={cl.rightBar}>

            <h4>Olia Rodionova</h4>
            {/*{skills.map(item => {*/}
            {/*    switch (item.id) {*/}
            {/*        case "details":*/}
            {/*        case "skills":*/}
            {/*            return <SkillItem/>*/}
            {/*        default:*/}
            {/*            console.log("invalid")*/}
            {/*    }*/}
            {/*})}*/}

        </div>
    );
};

export default RightBar;
