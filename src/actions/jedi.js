/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';
import {addAlert} from './alerts.js';

export const FETCH_JEDIS           = 'FETCH_JEDIS';
export const ADD_JEDI                = 'ADD_JEDI';
export const ADD_JEDI_FAIL        = 'ADD_JEDI_FAIL';
export const REMOVE_JEDI          = 'REMOVE_JEDI';
export const REMOVE_JEDI_FAIL  = 'REMOVE_JEDI_FAIL';

export const addJediSuccess = (data) => ({
    type: ADD_JEDI,
    payload: data,
});

export const removeJediSuccess = (data) => ({
    type: REMOVE_JEDI,
    payload: data,
});

export const fetchJedi = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: FETCH_JEDIS,
          payload: res.data,
        });
      });
  };
};

export const addJedi = (name) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/jedi', {
            name
          })
          .then((res) => {
            dispatch(addJediSuccess(res.data));
            dispatch(addAlert('success', 'New Jedi added : ' + name));
          })
          .catch((err) => {
            dispatch(addAlert('error', err.message));
          });
    };
};

export const removeJedi = ({ id, name }) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/jedi/${id}`)
          .then((_res) => {
            dispatch(removeJediSuccess(id));
            dispatch(addAlert('success', 'Jedi removed : ' + name));
          })
          .catch((err) => {
            dispatch(addAlert('error', err.message));
          });
    };
};
