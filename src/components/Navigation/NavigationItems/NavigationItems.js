import React from 'react';

import NavigationItem from './NavigationItem/NavaigationItem';
import NavigationItemsCss from './NavigationItems.css';

const navigationItems = props =>(
    <ul className={NavigationItemsCss.NavigationItems}>
        <NavigationItem link={"/"} active={true}>Burger Builder</NavigationItem>
        <NavigationItem link={"/"} >Checkout</NavigationItem>
    </ul>
);

export default navigationItems;