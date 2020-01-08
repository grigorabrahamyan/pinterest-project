import React from 'react';
import LogHeader from './log-header';
import './index.css';

function Header({step, topics, chnageTopicsBoxApp}) {
    return (
        <LogHeader 
            chnageTopicsBoxHeader = {chnageTopicsBoxApp} 
            topics = {topics}
            // step = {step}
        />
    );
};

export default Header;