import React from 'react';

const Main = ({route}) => {
	return (
		<div>
                    <div className="logo_div">
                    <h1 className="logo animated fadeInUpBig">4WINES</h1>
                    <h3 className="logo_sub animated fadeInUpBig">A great way to start exploring new wines</h3>
                    <button className="btn btn-info btn-lg try_demo" onClick={()=>route("Quiz1")}>Try our demo</button>
                   
                    <div>
                         <button className="btn btn-link explore_more">Explore more</button>
                         <div>
                         <button className="btn btn-primary btn-icon btn-round btn-link" style={{color:"white", marginTop: "-2vh"}}><i className="now-ui-icons arrows-1_minimal-down explore_down_icon"></i></button>
                         </div>
                    </div>

		          </div>
          </div>
		);
}

export default Main;



// <span style={{marginRight:"1rem"}}></span>