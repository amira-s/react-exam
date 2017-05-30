/**
 * Created by thomashourlier on 2/26/17.
 */
import * as c from '../actions/actions.js';
import { combineReducers } from 'redux';

function jediReducer(state = [], action) {
  switch (action.type) {
    case c.FETCH_FINISH:
      return [
        ...action.payload,
        ...state,
      ];
    case c.ADD_JEDI_SUCCESS:
        return [
          ...state ,
          action.payload,
        ];
    default:
      return state;
  }
}

export default combineReducers({
  jedi: jediReducer,
});
