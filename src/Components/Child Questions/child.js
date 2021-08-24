import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaRegSmile } from 'react-icons/fa';
import ToggleChild from '../Toggle Child/ToggleChild';
import './child.css';

function Child() {
    const now = 100;
    return (
        <>
        <div className="child-title">
            <h2>Assign Child Questions</h2> 
        </div>   
        <ProgressBar className="question-progress"  now={now} label="1 of 4"/>

        <div className="answer-single answer-child dflex4">
                        
                        <FaRegSmile className="smiley" />
                    
                    <span className="question-text-survey">How was your dining experience?</span>                    
                    
                </div>

        <div className="child-title2">
            <h2>Select from the Questions Below:</h2> 
        </div>   

        <div className="answers-top child-filter dflex3 space-between align-center">
                    <span>Filter By :</span>
                    <input type="text" placeholder="lorem ipsum"/>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single child-selection dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                            <ToggleChild/>
                        </span>   
                        <span>
                            <select multiple="true" id="on-answer-btn-1iZCmxLO0JPo">
                                <option value="any">Any</option>
                                <option value="pY6ARMP">Happy</option>
                                <option value="xyDMuNj">Okay</option>
                                <option value="w1VChI0">Poor</option>
                            </select>
                        </span>                     
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single child-selection dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                        <ToggleChild/>
                        </span>   
                        <span>
                            <select multiple="true" id="on-answer-btn-1iZCmxLO0JPo">
                                <option value="any">Any</option>
                                <option value="pY6ARMP">Happy</option>
                                <option value="xyDMuNj">Okay</option>
                                <option value="w1VChI0">Poor</option>
                            </select>
                        </span>                     
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single child-selection dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span className="">
                        <ToggleChild/>
                        </span>   
                        <span>
                            <select multiple="true" id="on-answer-btn-1iZCmxLO0JPo">
                                <option value="any">Any</option>
                                <option value="pY6ARMP">Happy</option>
                                <option value="xyDMuNj">Okay</option>
                                <option value="w1VChI0">Poor</option>
                            </select>
                        </span>                     
                        
                    </div>
                </div>

                <div id="questions-list" className="answers-bottom  ">
                    <div className="answer-single child-selection dflex4 align-center space-between">
                        
                            <FaRegSmile className="smiley" />
                        
                        <span className="question-text-survey2">How was your dining experience?</span>
                        <span>
                        <ToggleChild/>
                        </span>   
                        <span>
                            <select multiple="true" id="on-answer-btn-1iZCmxLO0JPo">
                                <option value="any">Any</option>
                                <option value="pY6ARMP">Happy</option>
                                <option value="xyDMuNj">Okay</option>
                                <option value="w1VChI0">Poor</option>
                            </select>
                        </span>                     
                        
                    </div>
                </div>
                <div className="empty-space"></div>
        </>
    );
}

export default Child;