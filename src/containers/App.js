import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/app-header'
import '../styles/App.css';

import { fetchJedi } from '../actions/action.js';

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
