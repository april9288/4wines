import React from 'react';
import discover from '../photos/discover.png';
import membership from '../photos/membership.png';
import enjoy from '../photos/enjoy.png';

const How = () => {
	return (
		<div>

            <div className="main">

                <div className="section section-basic">
                    <div className="container text-center mt-5">
                      <h2 className="title howitworks">How It Works</h2>

                    <div className="howitworks_container">

                      <div className="card text-center howitworks_card" style={{width: "20rem"}}>
                      <div className="card-body">
                        <img class="card-img-top" src={discover} alt="discover" style={{width: "50px"}}/>
                            <h4 className="card-title">Discover</h4>
                            <p className="card-text">We help you find your wine preference</p>
                          </div>
                      </div>

                      <div className="card text-center howitworks_card" style={{width: "20rem"}}>
                      <div className="card-body">
                        <img class="card-img-top" src={membership} alt="discover" style={{width: "50px"}}/>
                            <h4 className="card-title">Membership</h4>
                            <p className="card-text">We help you find your wine preference</p>
                          </div>
                      </div>

                      <div className="card text-center howitworks_card" style={{width: "20rem"}}>
                      <div className="card-body">
                        <img class="card-img-top" src={enjoy} alt="discover" style={{width: "50px"}}/>
                            <h4 className="card-title">Enjoy</h4>
                            <p className="card-text">We help you find your wine preference</p>
                          </div>
                      </div>

                    </div>


                    </div>
                </div>
            </div>

        
		</div>
		);
}

export default How;