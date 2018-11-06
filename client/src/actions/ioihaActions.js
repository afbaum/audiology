import axios from 'axios';

import { ADD_IOIHA, GET_ERRORS, GET_IOIHAS } from './types';

//Add IOIHA Data
export const addIoiha = ioihaData => dispatch => {
  axios
    .post('/api/ioiha', ioihaData)
    .then(res => dispatch({
      type: ADD_IOIHA,
      payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get all IOIHA Data
export const getIoihas = () => dispatch => {
  axios
    .get('/api/ioiha/all')
    .then(res => dispatch({
      type: GET_IOIHAS,
      payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_IOIHAS,
        payload: null
      })
    );
};
