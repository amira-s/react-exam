import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { removeJedi } from 'actions/jedi';

class RemoveJediButton extends PureComponent {
    removeJedi = () => {
        this.props.dispatch(removeJedi(this.props.jedi));
    }

    render() {
        return (
            <button
                className="remove-jedi"
                title="Remove Jedi"
                onClick={this.removeJedi} />
            );
    }
}

export default connect()(RemoveJediButton);
