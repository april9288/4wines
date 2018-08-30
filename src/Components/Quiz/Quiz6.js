import React from 'react';
import './Quiz.css';

const Quiz6 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <span className="progress-badge">Progress</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                          <span className="progress-value">100%</span>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Last Step! </h4>
                <h3 className="card-text">Please provide email below for more info and promotion code</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" style={{color:"black", display:"flex"}}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style ={{"borderColor": "#17a2b8"}} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <button type="submit" className="btn btn-info" onClick={()=>route("Quiz7")}>Submit</button>
                </form>
              </div>
              <div className="card-footer text-muted mb-2">
              </div>
            </div>

		</div>
		);
}

export default Quiz6;