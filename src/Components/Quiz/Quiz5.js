import React from 'react';
import './Quiz.css';

const Quiz5 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text">Our monthly membership plan includes...</h3>



                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Only $19.99 / month for 4 bottles of wine delivered to your door</li>
                        <li className="list-group-item">No shipping fee & No sign-up fee & No hidden fee</li>
                      </ul>


              </div>
              <div className="card-footer">
                <button className="btn btn-info btn-lg quiz_button" onClick={()=>route("Quiz6")}>Sounds interesting</button>
              </div>
            </div>

		</div>
		);
}

export default Quiz5;



// <button className="btn btn-info btn-lg bottles-bg btn_custumized disabled" style={{color: "white"}}>4 starter samples</button>
//                     <button className="btn btn-info btn-lg fee-bg btn_custumized disabled" style={{color: "white"}}>Only $19.99 / mo</button>
//                     <button className="btn btn-info btn-lg database-bg btn_custumized disabled" style={{color: "white"}}>Strong Customizing</button>
//                     <button className="btn btn-info btn-lg satisfaction-bg btn_custumized disabled" style={{color: "black"}}></button>