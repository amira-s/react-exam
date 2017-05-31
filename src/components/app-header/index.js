import React from 'react';
import logo from 'assets/millennium-falcon.svg';
import './styles.css';

const AppHeader = () => {

        return (
                <div className="app-header stars">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h2>Jedi List</h2>
                </div>
            );
};

export default AppHeader;
