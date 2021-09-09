import {GET_ACCOUNTS,GET_ANSWERS,GET_QUESTIONS,CREATE_QUESTION} from './actionTypes';
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

    var axios = require('axios');
    var data = '';
    
    var config = {
      method: 'get',
      url: 'https://services.censuble.com/api/v1/question',
      headers: { 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlcnZpY2VzLmNlbnN1YmxlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTYyMTAxNjAyOCwiZXhwIjoxNjUyNTUyMDI4LCJuYmYiOjE2MjEwMTYwMjgsImp0aSI6IkZrZzBmUDJNNk9NTGhzZ08iLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.EfEefjykkY3_a9h0YpLKKGJi3lI2zoVFsvYo0kwQ1evzGAiYD3YZsu5JQpegNf646ebmCJxU12kCOK-0Ik_e2B_b2hYbvAfXKZnpOUGBrB3eXK34lc_SqLU0j6cqLjtb_EbQZrk33OfizTvv81CJbPX2ZpdMlMoghcXpYlC_gJfA9yMk3zff6w0me4qY0rpCKAdLlVzpXZ8aD7Ucg5vcgLAf96nO11B023FD4nj-KlaROM2Xc6plJ8WEPIiy6xvqYzlh20Y7uoTtTUqw2-tSE-Dqxq3B4jS_5bIH1qEqt4URvdI5LJaOzVptDzf0vdD2RPhjkixEYR0UNucdKG8lJ0_xH-bKQGL6ITCRMpmbZVPixoe74w0dhk9AotrNa5B_lm4BYMEwhPpMjL21QebzRToCQq4tnuc8w94DbCSIAGYVfifNAOEBc-bBMMeOqTM_etXD7do6lQHuoHhNWoDrHGN1L_KiMJFENVeewezntyLOGENUqD7uIcqgrIkC9a20CF5n3nxM13M4ZV0hxGxgJLp5LNYxMy0Jugriajn_NWUqVSmEucmU-2jNxlurlzg9YZsV2K4V0lmwVCPQMjm0-f-o7d9kL4l1HLS-E0T7gu4n6hahYIlQyy6lPqv0BQjtn40GnjDo4Gx7cLk5yLTtOwsBKEQteOWnIisHP8t4cMM'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      dispatch({
        type:  GET_QUESTIONS,
        payload: response.data.data.questions,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };


  export const getAllAnswers= () => async (dispatch) => {

    try {
      const { data }  =  await axios.get(`${BASE_URL}/answer`,{
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2VydmljZXMuY2Vuc3VibGVkZXYuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjEzNTc5NDIzLCJleHAiOjE2NDUxMTU0MjMsIm5iZiI6MTYxMzU3OTQyMywianRpIjoiWnU5WmllWDA3Z2JEb3dydCIsInN1YiI6MjgsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s6d79Q7238HC0skjth7Del6EgnGPXW-9ROrqu18dh9JDV9_dHjH-D6-oxmOa-Gd6uv4p5XLx5uPprAs3FBfzjV0A6MutaSjGOjmLztKh86gdZSAjMeIQdu-o7N1DRdn3ATgDZm4JT5dFqiH1vKmiL5K07A2ug0GYdomKq2Ynt2h2xPom21S4jOpG2Q4GsmxOGEmYbiH9ktxlBgzQkutByPQ314LDZ0hevt1rRALOtIW89CQlDg7ntBw_uwZXyg6ui_gdns9xCca8cGUer0sxHBd8MO1h3KbJuaXkSj5yzZSuAmeJ_ySVmu_olgjm5eeZ0F10glFakjwBY1gOx_5HLKsfdap0980MgAwrf_R2uMMs2ipkU7KK7WIdQIo65xLYmyeLEjpBUSRH1t6Kek3yrA3Dmb4jfret3WCB7NWkSy0arhGI6dBF3i3r1trKQtX5tPyRPbCR8pExa2reCmzvSLaDM6zlTyRjaCfqOchl275SV8579YsyUt_aFU70AN2hdoRlAtFqJZzwFBk10EjtZ94AJLNZP8yQJHqlhn2DlWJ8SP7RRnMHqFpD4PW3_ei437wV0Q7kAcqb0suiG2wUFGF-HQHWc5WkUgTekkFGsCFN_rrhQ2uQ8MTKeKKRuRdDJGSIFnz-UUtbHAhCFZNkEjSL3QIyTnscioqbMLvs4uU'
        },
       })
   
console.log(data,"RRRRR")
      dispatch({
        type:  GET_ANSWERS,
        payload: data.data.answers,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const createQuestion= (datatosend) => async (dispatch) => {


    var data = JSON.stringify(datatosend);
    
    var config = {
      method: 'post',
      url: 'https://services.censuble.com/api/v1/question',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlcnZpY2VzLmNlbnN1YmxlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTYyMDg0OTM2MywiZXhwIjoxNjUyMzg1MzYzLCJuYmYiOjE2MjA4NDkzNjMsImp0aSI6ImpZanBuNTQ2cDc0Y0xtVXAiLCJzdWIiOjQsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.GGtJOxTckMO9szcvGPWYY24iF9Tkv7Zv-rE89fOiqLUWCShEBaP05sUaLPgL_nTiySYy7yvD9Hx6C4yIqXJHkbHC8E2aIMN-LUf_kqLvEgMvjxkGlHdKRtCwGRbIjwmEjXJmRgPah9qE4YGqmJn4i9a9of2U9MmnFAl-zy1r8Zcq9vmbo92NfsjSPvKudCnr5ASjCvbsMl4t2WXJaWWIMYdmekOEkFTtWgE3VAZD6s8-0HW4Fb035GoM2CkYHIgWJJ0N06Firk6JTIfmf7vc7S4slwHGYfI1j_J3ulaWg8dwbUze8MeOy2cL43oEBNlVyWT-8or_3QPxu7FaLFp8nXNrAEjtvP0Tb24hjpWmZpuOsHIqm_8t4xt3ZEHOidOO4WUi0Czg0y2XmqySMiWDeDLZkmHuCljJJtoh0OVmW6ot2m7Ti0yc6crFkTYwRSodC9RGYBeGMb-_DG6aQIKV0CmWCw2bx00m6q4PaNDo2Y201PfThf-kkoDS2s0xkPgzHNYs4exU9O02EmldPVC_D8QVGtcc0swnCbMMExD_enDc0WRWHgXFAD4vcbYazMaGzAf0ElSexw-fdugDZfOhQKVx2NwD6e6fdGziB0ffgy2mr7ZJFJ02O_QL4UyCWmDOHOxmA_To0KZKHr1Zbp0wVWlQ8QzcsAwgouqhh0ee6ac'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      dispatch({
        type:  CREATE_QUESTION,
        payload: response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
   

     
 
  };