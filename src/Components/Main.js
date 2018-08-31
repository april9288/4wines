import React from 'react';

const Main = ({quiz}) => {
	return (
		<div>
                    <div className="logo_div">
                    <h1 className="logo animated fadeInUpBig"><span style={{fontSize:"4rem"}}>4</span>WINES</h1>
                    <h3 className="logo_sub animated fadeInUpBig">A great way to start exploring new wines</h3>
                    <button className="btn btn-info btn-lg try_demo" onClick={()=>quiz("yes")}>Try our demo</button>
                   
                    <div>
                         <button className="btn btn-link explore_more">Explore more</button>
                         <i className="now-ui-icons arrows-1_minimal-down explore_down_icon"></i>
                    </div>

		          </div>
          </div>
		);
}

export default Main;



// <span style={{marginRight:"1rem"}}></span>