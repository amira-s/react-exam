import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJedi } from 'actions/jedi';
import logo from 'assets/jedi-logo.svg';
import logo_disabled from 'assets/jedi-logo-disabled.svg';
import './style.css';

class JediForm extends Component {

    constructor(props) {
        super(props);
        this.state = {jediName: ''};
    }

    handleSave = (event) => {
        this.props.dispatch(addJedi(this.state.jediName));
        this.setState({jediName: ""});
        event.preventDefault();

    }

    handleChange = (event) => {
        this.setState({jediName: event.target.value});
    }

    render() {
        return (
            <div style={this.props.style} ref="form" className="jedi-form">
                <form onSubmit={this.handleSave}>
                    <p className="header"> Add a Jedi </p>
                    <div className="jedi_add">
                        <label htmlFor="jedi-name">Jedi name</label>
                        <input id="jedi-name"
                            value={this.state.jediName}
                            type="text"
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="add_button" disabled={!this.state.jediName.trim()}>
                            <img src={this.state.jediName.trim() ? logo : logo_disabled} alt="logo" />
                        </button>
                    </div>
                </form>
            </div>
            );
    }
}

export default connect ()(JediForm);
