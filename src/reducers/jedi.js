/**
 * Created by thomashourlier on 2/26/17.
 */
import * as c from 'actions/jedi.js';

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
    case c.REMOVE_JEDI:
        return state.filter((jedi) => (jedi.id !== action.payload));
   default:
      return state;
  }
}

export default jediReducer;
