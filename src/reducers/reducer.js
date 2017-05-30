/**
 * Created by thomashourlier on 2/26/17.
 */
import * as c from '../actions/actions.js';
import { combineReducers } from 'redux';

function jediReducer(state = [], action) {
  switch (action.type) {
    case c.FETCH_JEDIS:
      return [
        ...action.payload,
        ...state,
      ];
    case c.ADD_JEDI:
        return [
          ...state,
          action.payload,
        ];
   case c.ADD_JEDI_FAIL:
      return {
        ...state,
        alerts : [...state.alerts, action.payload],
      };
   default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
  alerts: [],
});
