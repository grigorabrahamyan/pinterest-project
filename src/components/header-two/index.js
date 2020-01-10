import React from 'react';
import LogHeader from './log-header';
import './index.css';

function Header({topics, chnageTopicsBoxApp, changeLoadingApp, changeSignUpApp}) {
    return (
        <LogHeader 
            changeSignUpHeader = {changeSignUpApp}
            changeLoadingHeader = {changeLoadingApp}
            changeTopicsBoxHeader = {chnageTopicsBoxApp}
            topics = {topics}
        />
    );
};

export default Header;