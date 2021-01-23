import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import LogoCss from './Logo.css';

const logo = props =>(
    <div className={LogoCss.Logo}>
        <img src={burgerLogo} alt="MyBuger" />
    </div>
);

export default logo;