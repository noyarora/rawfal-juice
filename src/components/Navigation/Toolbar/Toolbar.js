import React from 'react';

import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Menu/Menu';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <Menu clicked={props.openBar}/>
            <div>Logo</div>
            <div className={classes.DesktopOnly}>
                <NavigationItems />
            </div>
        </div>
    );
};

export default toolbar;