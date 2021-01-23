import React from 'react';

import NavigationItemCss from './NavigationItem.css';

const NavigationItem = props =>(
    <li className={NavigationItemCss.NavigationItem}>
        <a
            href={props.links}
            className={props.active ? NavigationItemCss.active : null}>
            {props.children}
        </a>
    </li>
);

export default NavigationItem;