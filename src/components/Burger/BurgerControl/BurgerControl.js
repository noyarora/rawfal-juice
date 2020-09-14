import React from 'react';

import classes from './BurgerControl.module.css';

const burgerControl = (props) => {
    return (
        <div className={classes.Controls}>
            <div className={classes.Labels}>{props.label}</div>
            <button className={classes.ButtonAdd} onClick={props.added}>Add</button>
            <button className={classes.ButtonRemove} onClick={props.removed} disabled={props.disabled}>Remove</button>
        </div>
    );
};

export default burgerControl;