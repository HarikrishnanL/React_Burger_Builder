import React,{Component} from 'react';

import Aux from '../Auxilary/Auxiliary';
import layoutCss from './Layout.css';
import ToolBar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer:false
    };

    sideDrawerClosedHandler = ()=>{
        this.setState({showSideDrawer:false})
    };

    sideDrawerToggleHandler = () =>{
      this.setState((prevState)=>{
        return  {showSideDrawer:!prevState.showSideDrawer}
      });
    };

    render(){
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}  />
                {/*<div>toolbar,side drawer ,backdrop</div>*/}
                <main className={layoutCss  .Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}



// const layout = (props) =>(
//     <Aux>
//         <ToolBar />
//         <SideDrawer />
//         {/*<div>toolbar,side drawer ,backdrop</div>*/}
//         <main className={layoutCss  .Content}>
//             {props.children}
//         </main>
//     </Aux>
// );

export default Layout;
