import React from 'react';
import './Quiz.css';

const Quiz1 = ({route}) => {
	return (
		<div>

            <div className="card text-center card_quiz">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}>
                        </div>
                      </div>
                    </div>
              </div>

              <div className="card-body">
                <h3 className="card-text card_quiz_text">May I ask a few simple questions before we move on? </h3>
                <button className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz2")}>Yes</button>
                <button data-dismiss="modal" type="button" className="btn btn-info btn-lg body_button_mine">Later</button>
              </div>
            </div>

		</div>
		);
}

export default Quiz1;
