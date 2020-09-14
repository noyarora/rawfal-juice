import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BugerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';

const ingredientsCost = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalCost: 2,
        purchaseable: false,
        purchasing: false
    };

    getPurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const selectedIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = selectedIngredientCount + 1;

        const updateIngredientList = {...this.state.ingredients};
        updateIngredientList[type] = updatedIngredientCount;

        const newBurgerPrice = this.state.totalCost + ingredientsCost[type];

        this.setState({ingredients: updateIngredientList, totalCost: newBurgerPrice});
        this.getPurchaseState(updateIngredientList);
    };

    removeIngredientHandler = (type) => {
        const selectedIngredientCount = this.state.ingredients[type];
        if(selectedIngredientCount <= 0) {
            return;
        }
        const updatedIngredientCount = selectedIngredientCount - 1;

        const updateIngredientList = {...this.state.ingredients};
        updateIngredientList[type] = updatedIngredientCount;

        const newBurgerPrice = this.state.totalCost - ingredientsCost[type];

        this.setState({ingredients: updateIngredientList, totalCost: newBurgerPrice}); 
        this.getPurchaseState(updateIngredientList);
    };

    purchasingHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        alert('you continue');
    };

    render() {
        const buttonStatus = {...this.state.ingredients};
        for(let key in buttonStatus) {
            buttonStatus[key] = buttonStatus[key] <= 0;
        }
        return (
            <Fragment>
                <Modal show={this.state.purchasing} purchaseCancelled={this.purchaseCancelHandler}>
                    <BurgerSummary ingredients={this.state.ingredients} 
                    purchaseCancel={this.purchaseCancelHandler} 
                    purchaseContinue={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredients={this.removeIngredientHandler} 
                    disabled={buttonStatus}
                    price={this.state.totalCost}
                    purchaseable={this.state.purchaseable}
                    clickedPurchase={this.purchasingHandler}
                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;