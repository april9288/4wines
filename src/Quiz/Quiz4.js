import React from 'react';
import './Quiz.css';

const Quiz4 = ({route}) => {
	return (
		<div>

            <div className="card text-center card_quiz">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text card_quiz_text">Friends would describe you as...</h3>
                <div className="test_class">
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz5")}>Leader</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz5")} style={{fontSize:"0.9rem"}}>Adventurous</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz5")}>Bohemian</button>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz5")}>Fun</button>
                </div>
              </div>
              <div className="card-footer text-muted mb-2">
              </div>
            </div>

		</div>
		);
}

export default Quiz4;