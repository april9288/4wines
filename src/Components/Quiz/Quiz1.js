import React from 'react';
import './Quiz.css';

const Quiz1 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text">May I ask a few simple questions before we move on? </h3>
                <button className="btn btn-info btn-lg quiz_button btn_custumized" onClick={()=>route("Quiz2")}>Yes</button>
              </div>
              <div className="card-footer text-muted mb-2">
                <button className="btn btn-info btn-lg quiz_button btn_custumized" onClick={()=>route("Quiz_HOW")}>Later</button>
              </div>
            </div>

		</div>
		);
}

export default Quiz1;