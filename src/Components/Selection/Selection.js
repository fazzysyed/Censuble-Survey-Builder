import React from 'react';
import './Selection.css';  

function Selection() {
    return(
        <div id="survey-review" className="survey-review">
            <div className="content-area">
                <div className="survey-save-publish">
                    <h3>Select an Account</h3>
                    <div id="account-options">
                        <select id="account_option" multiple="true">
                            <option value="7205d82d-18d5-4ecd-920f-798c687e54bf">ACME Retirement</option>
                            <option value="97b5021f-b7a4-42b1-aceb-156607dd321f">Covenant Living</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selection;