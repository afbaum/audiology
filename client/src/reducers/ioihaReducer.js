import { ADD_IOIHA, GET_IOIHAS } from '../actions/types';

const initialState = {
  ioihas: [],
  ioiha: {},
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_IOIHAS:
      return {
        ...state,
        ioihas: action.payload
      }
    case ADD_IOIHA:
    return {
      ...state,
      ioiha: action.payload
    };
    default:
      return state;
  }
}
