import React,{useState,useEffect}  from 'react';
import Toggle from '../Toggle/Toggle';
import { FaRegSmile,FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { BiLayerPlus } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux"; 

import Modal from '../Modal/Modal';
import './Questions.css';
import { getAllQuestions } from '../../store/actions/actions';
import { getAccounts } from '../../Services/Api';

function Questions() {
    const [selectedIds,setSelectedIds] = useState([]);

    const questions = useSelector(state => state.Reducer.questions);
    const dispatch = useDispatch();

  const  handleSelectionMultiple = async (item) => {
 
        var selectedIdss = [...selectedIds] // clone state
        if (selectedIds.includes(item.id)){
          selectedIdss = selectedIds.filter((_id) => _id !== item.id);
     
        }
      
        else selectedIds.push(item.id);
        

    
         setSelectedIds(selectedIdss)
      };
useEffect(()=>{
    dispatch(getAllQuestions())
  
    getAccounts()

},[])
console.log(questions,"questions")
    return (
        <div id="questions_con" className="assign-answer">
            <div className="answer-title">
                <h2>Select Question</h2> 
            </div>           
            <div className="select-answers">
                <div className="answers-top dflex9 space-between align-center">
                    <span>Filter By :</span>
                    <input type="text" placeholder="lorem ipsum"/>
                    <Modal/>
                </div>

             {questions.map((item)=>{
     
                return(
                    <div id={item.id} className="answers-bottom  ">
                    <div className="answer-single dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" /> 
                        
                        <span className="question-text-survey2">{item.question_text}</span>
                        <span>
                            <Toggle  handler = {()=>handleSelectionMultiple(item)}/>
                        </span>
                       
                        <Button className="question-btn" >Child <BiLayerPlus className="layer-plus" /></Button>
                        
                        
                    </div>
                </div>
                );
            })} 


           
            </div>
        </div>
    );
}

export default Questions;