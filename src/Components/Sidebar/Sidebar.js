import React, {useState} from 'react';
import './Sidebar.css';  
import { BsCircleFill } from 'react-icons/bs';

function Sidebar({activate,activeHandler}) {
    const [active, setActive] =useState("Select");

    return (
        <div className="survey-menu">
            <div className="slider-nav">
                <div onClick={()=>activeHandler("Questions")}>
                    <div className="dots active"></div>
                    <span>Select Questions</span>
                </div>

                <div onClick={() => activeHandler("Children")}>
                <div className="dots3"></div>
                    <span>Assign Children</span>
                </div>

                <div onClick={()=>activeHandler("Answers")} >
                <div className="dots2"></div>
                    <span>Assign Answers</span>
                </div>

                    <div onClick={() => activeHandler("Answers")}>
                    <div className="dots4"></div>
                        <span>Child Answers</span>
                    </div>

                <div onClick={() => activeHandler("Preview")}>
                <div className="dots5"></div>
                    <span>Preview</span>
                </div>

                <div>
                <div className="dots6"></div>
                    <span>Publish</span>
                </div>
            </div>

            
        </div>

        
    );
}

export default Sidebar;