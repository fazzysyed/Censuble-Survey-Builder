import React, {useState} from 'react';
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar';
import Selection from './Components/Selection/Selection';
import Footer from './Components/Footer/Footer';
import Child from './Components/Child Questions/child';
import Answer from './Components/Child Answer/Anwer';
import SurveyPreview from './Components/Survey Preview/SurveyPreview';
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Questions from './Components/Questions/Questions';
import './Responsive.css';

function App() {
  const [active, setActive] =useState("Select");
  return (
    <div className="App">
        <Header/>
        <div className="wrapper survey-wrapper">
          <div className="profile-area">
              <div className="row">
                <div className="col">
                  <div className="profile">
                    <div className="main-content-area dflex space-between">
                      <div className="main-content-left">
                      <Sidebar activate = {active} activeHandler = {(value)=>{
console.log(value,"Value")
                         setActive(value)
            
                      }}/>

                      </div>

                      <div className="main-content-right">
                        <div id="survey-reiew" className="survey-review">
                         {active === "Select" && <Selection/>}
                         {active === "Questions" && <Questions/>}
                         {active === "Children" && <Child/>}
                         {active === "Answers" && <Answer/>}
                         {active === "Preview" && <SurveyPreview/>}


                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            <Footer/>
          </div>
        </div>
        
    </div>
  );
}

export default App;
