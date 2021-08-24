import { Dropdown } from 'react-bootstrap';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import AnsModal from '../Answer Modal/AnsModal';
import './Answer.css';


function Answer() {
    const now = 100;
    return (

        <>
        <AnsModal/>
         <div className="child-title">
            <h2>Select Child Answers</h2> 
        </div>   

        <ProgressBar className="question-progress"  now={now} label="1 of 4"/>

        <Dropdown>
  <Dropdown.Toggle className="ans-dropdown" variant="success" id="dropdown-basic">
    Answers
  </Dropdown.Toggle>

  <Dropdown.Menu className="ans-show">
    <Dropdown.Item className="ans1" href="#/action-1">Answer 1</Dropdown.Item>
    <Dropdown.Item className="ans1" href="#/action-2">Answer 2</Dropdown.Item>
    <Dropdown.Item className="ans1" href="#/action-3">Answer 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<div className="answers-top dflex3 space-between align-center">
                    <span>Filter By :</span>
                    <input type="text" placeholder="lorem ipsum"/>
                </div>

        </>
    );
}

export default Answer;