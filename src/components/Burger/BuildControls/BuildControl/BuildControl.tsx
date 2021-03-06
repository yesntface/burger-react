import React from 'react';

import classes from './BuildControl.module.css';

interface IBuildControl {
    label: string
}

const BuildControl = (props: IBuildControl) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{ props.label }</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
};

export default BuildControl;
