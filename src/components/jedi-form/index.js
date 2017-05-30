import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJedi } from 'actions/actions.js';
// import './style.css'

class JediForm extends Component {

    constructor(props) {
        super(props);
        this.state = {jediName: ''};
    };

    handleSave = (event) => {
        this.props.dispatch(addJedi(this.state.jediName));
    }

    handleChange = (event) => {
        this.setState({jediName: event.target.value});
    }

    render() {
        return (
            <div className="JediForm">
                <div className="header"> Add A Jedi </div>
                <label htmlFor="jedi_name">
                    Jedi Name :
                    <input id="jedi_name"
                                value={this.state.jediName}
                                type="text"
                                onChange={this.handleChange}
                    />
                </label>
                <button onClick={this.handleSave}> Add Jedi </button>
            </div>
            );
    }
}

export default connect ()(JediForm);
