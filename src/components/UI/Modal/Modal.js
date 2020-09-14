import React, { Fragment, Component } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.purchaseCancelled} />
                <div className={classes.Modal} style={{display: this.props.show ? 'block' : 'none'}}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
} 

export default Modal;