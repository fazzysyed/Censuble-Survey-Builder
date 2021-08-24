import React from 'react';
import './Footer.css';  

function Footer() {
    return(
        <div id="control-buttons" className="answers-btn  dflex2 align-center space-between">
            <button id="prev-btn" className="answer-btn answer-btn-left" disabled>
                Previous
            </button>
            <button id="next-btn" className="answer-btn answer-btn-right">
                Save & Continue
            </button>
        </div>
    );
}

export default Footer;