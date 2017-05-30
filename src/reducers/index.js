import { combineReducers } from 'redux';
import jediReducer from './jedi';
import alertReducer from './alert';

export default  combineReducers({
    jedi: jediReducer,
    alerts: alertReducer
});
