import React,{useState,useEffect} from 'react';
import './Selection.css'; 
import { useDispatch, useSelector } from "react-redux"; 
import { createQuestion, getAllAccounts } from '../../store/actions/actions';
import { getAccounts } from '../../Services/Api';

const Selection =() =>{

    const accounts = useSelector(state => state.Reducer.accounts);
    const dispatch = useDispatch();


useEffect(()=>{
    dispatch(getAllAccounts())
//     dispatch(createQuestion({
//         question_text: "Test",
//   answer_type: "hearts",
//   status: "active",
//   category_ids: [
//     "1",
//     "3",
//     "5"
//   ]
//     }))
    

},[])

    return(
        <div id="survey-review" className="survey-review">
            <div className="content-area">
                <div className="survey-save-publish">
                    <h3>Select an Account</h3>
                    <div id="account-options">
                        <select id="account_option" multiple="true">
                    {accounts.map((item)=>{
                        return(
                            <option value={item.uuid}>{item.name}</option>
                        );
                    })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selection;