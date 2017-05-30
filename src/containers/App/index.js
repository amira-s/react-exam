import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import AppHeader from 'components/app-header';
import JediForm from 'components/jedi-form';
import JediTable from 'components/jedi-table';
import { fetchJedi } from 'actions/actions.js';

import './style.css';

class App extends Component {
    componentWillMount() {
        this.fetchJedi();
    }

    fetchJedi() {
        this.props.dispatch(fetchJedi());
    }

    render() {
        return (
            <div className="App">
                <AppHeader />
                <div className="AppBody">
                    <JediTable jedi={this.props.jedi} />
                    <JediForm />
                </div>
            </div>
            );
    }
}

App.propTypes = {
    jedi: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        jedi: state.jedi,
        alerts: state.alerts
    };
}

export default connect(
    mapStateToProps,
    )(App);
