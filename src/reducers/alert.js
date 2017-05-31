import * as c from 'actions/alerts.js';

function alertReducer(state = [], action) {
    switch (action.type) {
        case c.ADD_ALERT:
            return [
                ...state,
                action.payload,
            ];
        case c.REMOVE_LAST_ALERT:
            var [ , ...alerts ] = state;
            return alerts;
        default:
            return state;
    }
}

export default alertReducer;
