/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export const FETCH_FINISH            = 'FETCH_FINISH';
export const ADD_JEDI_SUCCESS  = 'ADD_JEDI_SUCCESS';
export const ADD_JEDI_FAIL           = 'ADD_JEDI_FAIL';


export const addJediSuccess = (data) => {
    return {
          type: ADD_JEDI_SUCCESS,
          payload: data,
        };
}


export const addJediFail = () => {
    return {
          type: ADD_JEDI_FAIL,
        };
}

export const fetchJedi = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({
          type: FETCH_FINISH,
          payload: res.data,
        });
      })
  }
}

export const addJedi = (name) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/jedi', {
            name
          })
          .then((res) => {
            console.log("successfully added jedi : ", res);
            dispatch(addJediSuccess(res.data));
          })
          .catch((err) => {
            console.log("failed to add jedi : ", err);
            dispatch(addJediFail());
          });
    }
}
