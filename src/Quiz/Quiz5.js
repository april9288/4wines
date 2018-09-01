import React from 'react';
import './Quiz.css';

const Quiz5 = ({route}) => {
	return (
		<div>

            <div className="card text-center card_quiz">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text card_quiz_text">Last Step!</h3>    
                <h4 className="card_quiz_text">Our powerful recommendation engine is calculating your preference. If you want to know the result, subscribe us now.</h4>                  
                <form>
                  <div className="form-group">

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here!" />
                  
                  </div>
                  <button data-dismiss="modal" type="button" className="btn btn-info btn-lg body_button_mine" onClick={()=>route("Quiz1")}>Submit</button>
                </form>

              </div>

            </div>

		</div>
		);
}

export default Quiz5;

// <button data-dismiss="modal" type="button" className="btn btn-info btn-lg quiz_button btn_custumized">Later</button>