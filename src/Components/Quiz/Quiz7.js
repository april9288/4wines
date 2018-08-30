import React from 'react';
import './Quiz.css';

const Quiz7 = ({route}) => {

	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <span className="progress-badge">Thank you for your time!</span>
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>
                          <span className="progress-value">100%</span>
                        </div>
                      </div>
                    </div>
              </div>

              <div className="card-body card_last_link">
                  <div className = "one_last_link">
                    <p className="card-text"><i className="now-ui-icons business_bulb-63" style={{fontSize : "4rem", color: "#007bff"}}></i></p>
                    <button className="btn btn-primary btn_last_link">How it works >></button>
                  </div>
                  <div className = "one_last_link">
                    <p className="card-text"><i className="now-ui-icons users_single-02" style={{fontSize : "4rem", color: "#007bff"}}></i></p>
                    <button className="btn btn-primary btn_last_link">Membership plan >></button>
                  </div>
                  <div className = "one_last_link">
                    <p className="card-text"><i className="now-ui-icons education_hat" style={{fontSize : "4rem", color: "#007bff"}}></i></p>
                    <button className="btn btn-primary btn_last_link">We hire >></button>
                  </div>
                  <div className = "one_last_link">
                    <p className="card-text"><i className="now-ui-icons ui-1_send" style={{fontSize : "4rem", color: "#007bff"}}></i></p>
                    <button className="btn btn-primary btn_last_link">Follow us >></button>
                  </div>

              </div>
            </div>

		</div>
		);
}

export default Quiz7;