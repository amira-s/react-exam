export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_LAST_ALERT = 'REMOVE_LAST_ALERT';

export const addAlert = (type, message) => {
    return dispatch => {
        setTimeout(function () {dispatch(removeLastAlert())}, 5000);
        dispatch(addAlertSuccess({type: type, msg: message}));
    }
};

export const addAlertSuccess = (alert) => {
    return {
        type: ADD_ALERT,
        payload: alert
    }
};

export const removeLastAlert = () => {
    return {
        type: REMOVE_LAST_ALERT
    }
};
