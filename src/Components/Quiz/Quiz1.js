import React from 'react';
import './Quiz.css';

const Quiz1 = ({route}) => {
	return (
		<div>

            <div className="card quiz_card text-center animated zoomInRight">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text quiz_card_text">May I ask a few simple questions before we move on? </h3>
                <button className="btn btn-info btn-lg quiz_button btn_custumized" onClick={()=>route("Quiz2")}>Yes</button>
                <button className="btn btn-info btn-lg quiz_button btn_custumized" onClick={()=>route("main")}>Later</button>
              </div>
            </div>

		</div>
		);
}

export default Quiz1;