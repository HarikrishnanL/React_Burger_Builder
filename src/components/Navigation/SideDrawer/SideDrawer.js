import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerCss from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxiliary';



const sideDrawer = props =>{
    let attachedClasses = [SideDrawerCss.SideDrawer,SideDrawerCss.Close];

    if (props.open){
        attachedClasses = [SideDrawerCss.SideDrawer,SideDrawerCss.Open]
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}  />
            <div className={attachedClasses.join(' ')}>
                <div className={SideDrawerCss.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;