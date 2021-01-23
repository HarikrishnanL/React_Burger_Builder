import React,{Component} from 'react';
import burgerIngredientCss from './BurgerIngredient.css';
import PropTypes from 'prop-types';



class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={burgerIngredientCss.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={burgerIngredientCss.BreadTop}>
                        <div className={burgerIngredientCss.Seeds1}></div>
                        <div className={burgerIngredientCss.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = (
                    <div className={burgerIngredientCss.Meat}></div>
                );
                break;
            case ('cheese'):
                ingredient = (
                    <div className={burgerIngredientCss.Cheese}></div>
                );
                break;
            case ('bacon'):
                ingredient = (
                    <div className={burgerIngredientCss.Bacon}></div>
                );
                break;
            case ('salad'):
                ingredient = (
                    <div className={burgerIngredientCss.Salad}></div>
                );
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }

};


BurgerIngredient.propTypes ={
    type:PropTypes.string.isRequired
}




export default BurgerIngredient;