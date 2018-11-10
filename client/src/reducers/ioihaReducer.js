import { ADD_IOIHA, GET_IOIHAS, DELETE_IOIHA } from '../actions/types';

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
      };
    case ADD_IOIHA:
      return {
        ...state,
        ioihas: [action.payload, ...state.ioihas]
      };
    case DELETE_IOIHA:
      return {
        ...state,
        ioihas: state.ioihas.filter(ioiha => ioiha._id !== action.payload)
      };
    default:
      return state;
  }
}
