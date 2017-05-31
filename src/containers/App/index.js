import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StickyContainer, Sticky } from 'react-sticky';
import Media from 'react-media';
import AppHeader from 'components/app-header';
import JediForm from 'components/jedi-form';
import JediTable from 'components/jedi-table';
import Alerts from 'components/Alerts';
import { fetchJedi } from 'actions/jedi';

import './style.css';


class JediFormContainer extends PureComponent {
    render() {
        return (
            <StickyContainer className="form-container">
                <Media query="(max-width: 680px)">
                    {matches => matches ? (
                        <JediForm />
                        ) : (
                        <Sticky>
                            {({isSticky}) => (<JediForm style={{position: isSticky? 'fixed' : 'static', top: 0}}/>)}
                        </Sticky>
                        )}
                    </Media>
            </StickyContainer>
        );
    }
}

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
                <Alerts alerts={this.props.alerts} />
                <AppHeader />
                <div className="AppBody">
                    <section className="jedi-table-container">
                        <JediTable jedis={this.props.jedi} />
                    </section>
                    <JediFormContainer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    jedi: PropTypes.array,
    alerts: PropTypes.array,
};

function mapStateToProps(state) {
    return {
        jedi: state.jedi,
        alerts: state.alerts
    };
}

export default connect(mapStateToProps)(App);
