import React, {Fragment} from 'react';

import Button from '../../UI/Button/Button';

const burgerSummary = (props) => {

    const ingredientsList = Object.keys(props.ingredients).map(ing => {
        return <li key={ing}>
            <span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]} 
        </li>
    });

    return (
        <Fragment>
            <h3>Your Order Summary</h3>
            <p>Your burger with the following ingredients</p>
            <ul>
                {ingredientsList}
            </ul>
            <Button btnType={'Success'} clicked={props.purchaseContinue} />
            <Button btnType={'Cancel'} clicked={props.purchaseCancel} />
        </Fragment>
    );
};

export default burgerSummary;