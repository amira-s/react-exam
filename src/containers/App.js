import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../components/app-header';
import JediForm from '../components/jedi-form';

import { fetchJedi } from '../actions/actions.js';

import '../styles/App.css';


class App extends Component {
    componentWillMount() {
        this.fetchJedi();
    }

    fetchJedi() {
        this.props.dispatch(fetchJedi());
    }

    renderJediList() {
        return (
            this.props.jedi.map((jedi, index) => (
                            <div key={index}>
                                Jedi: id: {jedi.id} name: {jedi.name}
                            </div>
            )));
    }

    render() {

        return (
            <div className="App">
                <AppHeader />
                <div className="Jedi-List">
                    {this.renderJediList()}
                </div>
                <JediForm />
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
    };
}

export default connect(
    mapStateToProps,
    )(App);
