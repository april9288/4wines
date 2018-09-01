import React from 'react';
import './Quiz.css';

const Quiz5 = ({route}) => {
	return (
		<div>

            <div className="card quiz_card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text quiz_card_text">Our monthly membership plan includes...</h3>


                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">Only $19.99 / month for 4 bottles of wine delivered to your door</li>
                        <li className="list-group-item">No shipping fee & No sign-up fee & No hidden fee</li>
                      </ul>
                      
                <h4 className="card-text quiz_card_text">Please provide email below for more info and promotion code</h4>
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

export default Quiz5;



// <button className="btn btn-info btn-lg bottles-bg btn_custumized disabled" style={{color: "white"}}>4 starter samples</button>
//                     <button className="btn btn-info btn-lg fee-bg btn_custumized disabled" style={{color: "white"}}>Only $19.99 / mo</button>
//                     <button className="btn btn-info btn-lg database-bg btn_custumized disabled" style={{color: "white"}}>Strong Customizing</button>
//                     <button className="btn btn-info btn-lg satisfaction-bg btn_custumized disabled" style={{color: "black"}}></button>