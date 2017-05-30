import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

const AppHeader = (props) => {

        return (
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
            );
};

export default AppHeader;
