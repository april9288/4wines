import React from 'react';
import './Quiz.css';

const Quiz6 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Last Step! </h4>
                <h4 className="card-text">Please provide email below for more info and promotion code</h4>
                <form>
                  <div className="form-group">

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email here!" style ={{"borderColor": "white"}} />
                    <small id="emailHelp" className="form-text" style={{color:"white"}}>We'll never share your email with anyone else.</small>
                  </div>
                  <button type="submit" className="btn btn-info btn-lg quiz_button" onClick={()=>route("Quiz7")}>Submit</button>
                </form>
              </div>
            </div>

		</div>
		);
}

export default Quiz6;