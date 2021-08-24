import React from 'react';
import logo from '../../Assets/Images/logo.svg';
import './Header.css';  

function Header() {
  return (
      <div className="header-area">
              <div className="row">
                <div className="col">
                    <div className="logo-area dflex space-between align-center">
                        <div className="logo-left">
                            <a href="#"><img src={logo} className="logo" alt="logo" /></a>
                            <span></span>
                        </div>
                        <div className="logo-right">
                            <span>
                                <strong>Survey Builder</strong>
                            </span>
                            <span className="status-update">Survey In-Progress</span>
                        </div>

                    </div>
                </div>
              </div>

      </div>
      
  );
}

export default Header;
