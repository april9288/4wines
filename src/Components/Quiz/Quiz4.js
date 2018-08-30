import React from 'react';
import './Quiz.css';

const Quiz4 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <span className="progress-badge">Progress</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                          <span className="progress-value">60%</span>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text">Friends would describe you as...</h3>
                <button className="btn btn-info btn-lg leader-bg btn_custumized" onClick={()=>route("Quiz5")} style={{color: "white"}}>Leader</button>
                <button className="btn btn-info btn-lg adven-bg btn_custumized" onClick={()=>route("Quiz5")} style={{color: "black"}}>Adventurous</button>
                <button className="btn btn-info btn-lg bohemian-bg btn_custumized" onClick={()=>route("Quiz5")} style={{color: "white"}}>Bohemian</button>
                <button className="btn btn-info btn-lg fun-bg btn_custumized" onClick={()=>route("Quiz5")} style={{color: "black"}}>Fun</button>
              </div>
              <div className="card-footer text-muted mb-2">
              </div>
            </div>

		</div>
		);
}

export default Quiz4;