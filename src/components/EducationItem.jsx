import React from 'react';
import classes from './components.module.css';

const EducationItem = ({item}) => {

    return (
        <div className={classes.education__item}>
            <h4 className={classes.education__main__info} dangerouslySetInnerHTML={{__html:item.mainInfo.replace(/\n/g, "<br />")}}/>
            <h5 className={classes.education__terms} dangerouslySetInnerHTML={{__html:item.terms.replace(/\n/g, "<br />")}}/>
            <h5 className={classes.education__additional} dangerouslySetInnerHTML={{__html:item.additionalInfo.replace(/\n/g, "<br />")}}/>
        </div>
    );
};

export default EducationItem;
