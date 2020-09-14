import React from 'react';

import classes from './BurgerControls.module.css';
import BurgerControl from '../BurgerControl/BurgerControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
];

const burgerControls = (props) => {
    return (
        <div className={classes.ControlBox}>
            <p className={classes.Price}>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctrl => {
                    return (
                        <BurgerControl 
                            key={ctrl.label}
                            label={ctrl.label}
                            added={() => props.addIngredient(ctrl.type)}
                            removed={() => props.removeIngredients(ctrl.type)}
                            disabled={props.disabled[ctrl.type]}
                        />
                    );
                })
            }
            <button disabled={!props.purchaseable} onClick={props.clickedPurchase}>ORDER NOW</button>
        </div>
    );
};

export default burgerControls;