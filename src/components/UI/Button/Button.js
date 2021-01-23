import React from 'react';
import ButtonCss from './Button.css';

const button = props =>(
    <button
        className={[ButtonCss.Button,ButtonCss[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;