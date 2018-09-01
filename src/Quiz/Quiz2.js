import React from 'react';
import './Quiz.css';
// import logo from './logo.svg';


const Quiz2 = ({route}) => {
	return (
		<div>

            <div className="card text-center card_quiz">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text card_quiz_text">What type of flavor would you prefer?</h3>
                <div className="test_class">
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz3")}>Sweet honey</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz3")}>Bitter coffee</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz3")}>Sour lemon</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz3")}>Salty pretzel</button>
                </div>
              </div>
            </div>

		</div>
		);
}

export default Quiz2;