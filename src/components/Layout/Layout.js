import React, { Fragment, Component } from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {

    state = {
        sideBarOpen: false
    }

    closeSideBarHandler = () => {
        this.setState({sideBarOpen: false});
    };

    openSideBarHandler = () => {
        this.setState({sideBarOpen: true});
    };

    render() {
        return (
            <Fragment>
                <Toolbar openBar={this.openSideBarHandler} />
                <Sidebar show={this.state.sideBarOpen} closeBar={this.closeSideBarHandler} />
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </Fragment>  
        );
    }
}

export default Layout;