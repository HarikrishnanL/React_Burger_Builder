import React,{Component} from 'react';
import ModalCss from './Modal.css';
import Aux from '../../../hoc/Auxilary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.show !== this.state.show){
        //     return true;
        // }
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal.js] modal will update');
    }


    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={ModalCss.Modal}
                    style={{
                        transform:this.props.show ? 'translateY(0)':'translateY(-100vh)',
                        opacity:this.props.show ? '1':'0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

// const modal = (props)=>(
//     <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed}/>
//         <div
//             className={ModalCss.Modal}
//             style={{
//                 transform:props.show ? 'translateY(0)':'translate(-100vh)',
//                 opacity:props.show ? '1':'0'
//             }}
//         >
//             {props.children}
//         </div>
//     </Aux>
// );

export default Modal;