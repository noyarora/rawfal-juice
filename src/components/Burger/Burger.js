import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    const getIngredients = Object.keys(props.ingredients).map(ing => {
        return [...Array(props.ingredients[ing])].map((_, i) => {
            return <BurgerIngredient key={ing + i} type={ing} />
        });
    });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {getIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;