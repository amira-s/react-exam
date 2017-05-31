import React, {PureComponent} from 'react';
import Alert from 'components/Alert';

const style = {
    position: 'fixed',
    top: 70,
    right: 20,
    zIndex: 999999
};

class Alerts extends PureComponent
{
    render() {
        const alerts = this.props.alerts.map((alert, i) => (
            <Alert key={i} type={alert.type} message={alert.msg}/>
        ));

        return (
            <div style={style}>
                {alerts}
            </div>
        );
    }
}

export default Alerts;
