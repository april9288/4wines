import React from 'react';
import './Quiz.css';
// import logo from './logo.svg';


const Quiz2 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                          {/*<span className="progress-value">20%</span>*/}
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text">May I ask a few simple questions before we move on? What type of flavor would you prefer?</h3>
                <button className="btn btn-info btn-lg honey-bg btn_custumized" onClick={()=>route("Quiz3")} style={{color: "white"}}>Sweet honey</button>
                <button className="btn btn-info btn-lg coffee-bg btn_custumized" onClick={()=>route("Quiz3")} style={{color: "white"}}>Bitter coffee</button>
                <button className="btn btn-info btn-lg lemon-bg btn_custumized" onClick={()=>route("Quiz3")} style={{color: "black"}}>Sour lemon</button>
                <button className="btn btn-info btn-lg salty-bg btn_custumized" onClick={()=>route("Quiz3")} style={{color: "black"}}>Salty pretzel</button>
              </div>
              <div className="card-footer text-muted mb-2">
                
              </div>
            </div>

		</div>
		);
}

export default Quiz2;