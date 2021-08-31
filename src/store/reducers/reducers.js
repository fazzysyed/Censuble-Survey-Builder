import {GET_ACCOUNTS} from "../actions/actionTypes"

const initialState = [];

const Reducer =(state = initialState, action)=> {
  const { type, payload } = action;

  switch (type) {


    case GET_ACCOUNTS:
      return payload;


    default:
      return state;
  }
};

export default Reducer;