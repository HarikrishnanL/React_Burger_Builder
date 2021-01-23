import React from 'react';

import DrawerToggleClass from './DrawerToggle.css';

const drawerToggel = props =>(
    <div className={DrawerToggleClass.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggel;