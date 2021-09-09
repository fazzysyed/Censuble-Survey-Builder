import {GET_ACCOUNTS, GET_ANSWERS, GET_QUESTIONS} from "../actions/actionTypes"

const initialState = {
  accounts : [],
  questions : [],
  answers:[]
};

const Reducer =(state = initialState, action)=> {
  const { type, payload } = action;
console.log(payload,"Payload")

  switch (type) {


    case GET_ACCOUNTS:
    return{
      ...state,
      accounts:payload
    }
    case GET_QUESTIONS:
      return{
        ...state,
        questions:payload
      }
      case GET_ANSWERS:
        return{
          ...state,
          questions:payload
        }
  

    default:
      return state;
  }
};

export default Reducer;