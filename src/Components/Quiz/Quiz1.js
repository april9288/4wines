import React from 'react';
import './Quiz.css';

const Quiz1 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <span className="progress-badge">Progress</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}>
                          <span className="progress-value">0%</span>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Did you just start getting into wine?</h4>
                <h3 className="card-text">But you don't know how to start? 4WINES can help you!</h3>
                <button className="btn btn-info btn-lg" onClick={()=>route("Quiz2")}>Show me more >></button>
              </div>
              <div className="card-footer text-muted mb-2">
                <button className="btn btn-primary btn-link" onClick={()=>route("Quiz_HOW")}>No. later</button>
              </div>
            </div>

		</div>
		);
}

export default Quiz1;