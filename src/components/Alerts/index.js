import React, {PureComponent} from 'react';
import Alert from 'components/Alert';

const style = {
    position: 'fixed',
    top: 70,
    right: 10,
    zIndex: 999999
};

class Alerts extends PureComponent
{
    render()
    {
        var alerts = this.props.alerts.map(function (alert, i) {
            return <Alert key={i} type={alert.type} message={alert.msg}></Alert>
        });

        return (
            <div style={style}>
                {alerts}
            </div>
        );
    };
}

export default Alerts;
