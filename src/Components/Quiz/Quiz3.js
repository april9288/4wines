import React from 'react';
import './Quiz.css';

const Quiz3 = ({route}) => {
	return (
		<div>

            <div className="card text-center">
              <div className="card-header mt-2">
                      <div className="progress-container progress-info">
                      <div className="progress">
                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>
                        </div>
                      </div>
                    </div>
              </div>
              <div className="card-body">
                <h3 className="card-text">What type of chocolate do you like?</h3>
                <button className="btn btn-info btn-lg milk-bg btn_custumized" onClick={()=>route("Quiz4")} style={{color: "white"}}>Milk chocolate</button>
                <button className="btn btn-info btn-lg dark-bg btn_custumized" onClick={()=>route("Quiz4")} style={{color: "white"}}>Dark chocolate</button>
                <button className="btn btn-info btn-lg whitechoco-bg btn_custumized" onClick={()=>route("Quiz4")} style={{color: "black"}}>White chocolate</button>
              </div>
              <div className="card-footer text-muted mb-2">
                
              </div>
            </div>

		</div>
		);
}

export default Quiz3;