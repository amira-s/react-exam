import * as c from 'actions/alerts.js';

function alertReducerr(state = [], action) {
  switch (action.type) {
    case c.ADD_ALERT:
      return [
        ...state,
        action.payload,
      ];
    case c.REMOVE_LAST_ALERT:
      var alerts = state;
      alerts.shift();
        return [
          ...alerts
        ];
   default:
      return state;
  }
}

export default alertReducerr;
