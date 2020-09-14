import React, { Fragment } from 'react';

import classes from './Sidebar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidebar = (props) => {

    let classesAttached = [classes.SideDrawer, classes.Close];
    if (props.show) {
        classesAttached = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.closeBar}/>
            <div className={classesAttached.join(' ')}>
                <NavigationItems />
            </div>
        </Fragment>
    );
};

export default sidebar;