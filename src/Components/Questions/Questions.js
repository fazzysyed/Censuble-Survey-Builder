import React  from 'react';
import Toggle from '../Toggle/Toggle';
import { FaRegSmile } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { BiLayerPlus } from 'react-icons/bi';
import Modal from '../Modal/Modal';
import './Questions.css';

function Questions() {
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

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                            <Toggle/>
                        </span>
                       
                        <Button className="question-btn" >Child <BiLayerPlus className="layer-plus" /></Button>
                        
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                            <Toggle/>
                        </span>
                       
                        <Button className="question-btn" >Child <BiLayerPlus className="layer-plus" /></Button>
                        
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                            <Toggle/>
                        </span>
                       
                        <Button className="question-btn" >Child <BiLayerPlus className="layer-plus" /></Button>
                        
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                            <Toggle className="toggle-questions"/>
                        </span>
                       
                        <Button className="question-btn" >Child <BiLayerPlus className="layer-plus" /></Button>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;