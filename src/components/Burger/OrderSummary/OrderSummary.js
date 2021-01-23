import React,{Component} from 'react';

import Aux from '../../../hoc/Auxilary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    render(){
        const ingredientSummary =  Object.keys(this.props.ingredients).map(igKey=>{
            return (
                <li key={igKey}>
                 <span style={{textTransform:'capitalize'}}>
                     {igKey}
                 </span>: {this.props.ingredients[igKey]}
                </li>
            );
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delecious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : $ {this.props.price.toFixed(2)}</strong> </p>
                <p>Continue to Checkout?</p>
                <Button
                    clicked={this.props.purchaseCancelled}
                    btnType={"Danger"}>
                    CANCEL!
                </Button>
                <Button
                    clicked={this.props.purchaseContinued}
                    btnType={"Success"}>
                    CONTINUE!
                </Button>
            </Aux>

        )
    }

}


// const orderSummary = (props)=>{
//      const ingredientSummary =  Object.keys(props.ingredients).map(igKey=>{
//          return (
//              <li key={igKey}>
//                  <span style={{textTransform:'capitalize'}}>
//                      {igKey}
//                  </span>: {props.ingredients[igKey]}
//              </li>
//          );
//      });
//
//     return(
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A delecious burger with following ingredients:</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <p><strong>Total Price : $ {props.price.toFixed(2)}</strong> </p>
//             <p>Continue to Checkout?</p>
//             <Button
//                 clicked={props.purchaseCancelled}
//                 btnType={"Danger"}>
//                 CANCEL!
//             </Button>
//             <Button
//                 clicked={props.purchaseContinued}
//                 btnType={"Success"}>
//                 CONTINUE!
//             </Button>
//         </Aux>
//     );
// };

export default OrderSummary;