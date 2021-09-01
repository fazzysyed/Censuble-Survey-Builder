import {GET_ACCOUNTS,GET_ANSWERS,GET_QUESTIONS} from './actionTypes';
import axios from "axios"

import {getAccounts} from "../../Services/Api" 
import { BASE_URL } from '../../Services/Url';

export const getAllAccounts = (data) => async (dispatch) => {

    try {
      const { data }  =  await axios.get(`${BASE_URL}/account`,{
        headers: { 
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2VydmljZXMuY2Vuc3VibGVkZXYuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjEzNTc5NDIzLCJleHAiOjE2NDUxMTU0MjMsIm5iZiI6MTYxMzU3OTQyMywianRpIjoiWnU5WmllWDA3Z2JEb3dydCIsInN1YiI6MjgsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s6d79Q7238HC0skjth7Del6EgnGPXW-9ROrqu18dh9JDV9_dHjH-D6-oxmOa-Gd6uv4p5XLx5uPprAs3FBfzjV0A6MutaSjGOjmLztKh86gdZSAjMeIQdu-o7N1DRdn3ATgDZm4JT5dFqiH1vKmiL5K07A2ug0GYdomKq2Ynt2h2xPom21S4jOpG2Q4GsmxOGEmYbiH9ktxlBgzQkutByPQ314LDZ0hevt1rRALOtIW89CQlDg7ntBw_uwZXyg6ui_gdns9xCca8cGUer0sxHBd8MO1h3KbJuaXkSj5yzZSuAmeJ_ySVmu_olgjm5eeZ0F10glFakjwBY1gOx_5HLKsfdap0980MgAwrf_R2uMMs2ipkU7KK7WIdQIo65xLYmyeLEjpBUSRH1t6Kek3yrA3Dmb4jfret3WCB7NWkSy0arhGI6dBF3i3r1trKQtX5tPyRPbCR8pExa2reCmzvSLaDM6zlTyRjaCfqOchl275SV8579YsyUt_aFU70AN2hdoRlAtFqJZzwFBk10EjtZ94AJLNZP8yQJHqlhn2DlWJ8SP7RRnMHqFpD4PW3_ei437wV0Q7kAcqb0suiG2wUFGF-HQHWc5WkUgTekkFGsCFN_rrhQ2uQ8MTKeKKRuRdDJGSIFnz-UUtbHAhCFZNkEjSL3QIyTnscioqbMLvs4uU'
        },
       })
   

      dispatch({
        type:  GET_ACCOUNTS,
        payload: data.data.accounts,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const getAllQuestions = () => async (dispatch) => {

    try {
      const { data }  =  await axios.get(`${BASE_URL}/question`,{
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2VydmljZXMuY2Vuc3VibGVkZXYuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjEzNTc5NDIzLCJleHAiOjE2NDUxMTU0MjMsIm5iZiI6MTYxMzU3OTQyMywianRpIjoiWnU5WmllWDA3Z2JEb3dydCIsInN1YiI6MjgsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s6d79Q7238HC0skjth7Del6EgnGPXW-9ROrqu18dh9JDV9_dHjH-D6-oxmOa-Gd6uv4p5XLx5uPprAs3FBfzjV0A6MutaSjGOjmLztKh86gdZSAjMeIQdu-o7N1DRdn3ATgDZm4JT5dFqiH1vKmiL5K07A2ug0GYdomKq2Ynt2h2xPom21S4jOpG2Q4GsmxOGEmYbiH9ktxlBgzQkutByPQ314LDZ0hevt1rRALOtIW89CQlDg7ntBw_uwZXyg6ui_gdns9xCca8cGUer0sxHBd8MO1h3KbJuaXkSj5yzZSuAmeJ_ySVmu_olgjm5eeZ0F10glFakjwBY1gOx_5HLKsfdap0980MgAwrf_R2uMMs2ipkU7KK7WIdQIo65xLYmyeLEjpBUSRH1t6Kek3yrA3Dmb4jfret3WCB7NWkSy0arhGI6dBF3i3r1trKQtX5tPyRPbCR8pExa2reCmzvSLaDM6zlTyRjaCfqOchl275SV8579YsyUt_aFU70AN2hdoRlAtFqJZzwFBk10EjtZ94AJLNZP8yQJHqlhn2DlWJ8SP7RRnMHqFpD4PW3_ei437wV0Q7kAcqb0suiG2wUFGF-HQHWc5WkUgTekkFGsCFN_rrhQ2uQ8MTKeKKRuRdDJGSIFnz-UUtbHAhCFZNkEjSL3QIyTnscioqbMLvs4uU'
        },
       })
   
console.log(data,"RRRRR")
      dispatch({
        type:  GET_QUESTIONS,
        payload: data.data.questions,
      });
    } catch (err) {
      console.log(err);
    }
  };