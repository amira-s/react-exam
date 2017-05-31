export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_LAST_ALERT = 'REMOVE_LAST_ALERT';

export const addAlert = (type, message) => {
    return dispatch => {
        setTimeout(() => { dispatch(removeLastAlert()) }, 5000);
        dispatch(addAlertSuccess({type: type, msg: message}));
    };
};

export const addAlertSuccess = (alert) => ({
    type: ADD_ALERT,
    payload: alert
});

export const removeLastAlert = () => ({
    type: REMOVE_LAST_ALERT
});
