import {GET_ACCOUNTS,GET_ANSWERS,GET_QUESTIONS} from './actionTypes';


import {getAccounts} from "../../Services/Api" 

export const getAllAccounts = () => async (dispatch) => {
    try {
      const res = await getAccounts();
  
      dispatch({
        type: GET_ACCOUNTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };