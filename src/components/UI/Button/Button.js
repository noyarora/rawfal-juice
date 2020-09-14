import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button className={[classes[props.btnType], classes.Button].join(' ')}
    onClick={props.clicked}>
        {props.btnType}
    </button>
);

export default button;