import React, {PureComponent} from 'react';
import './styles.css';

const textColors = {
    error: 'red',
    warning: 'orange',
    info: 'blue',
    success: 'green'
};

class Alert extends PureComponent
{

    render()
    {
        return (
            <div className="alert">
                <div style={{color: textColors[this.props.type]}}>{this.props.message}</div>
            </div>
        );
    };
}

export default Alert;
