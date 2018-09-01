import React from 'react';

const Main = ({route}) => {
	return (
		<div>
                    <div className="logo_div">
                    <h2 className="logo animated fadeInUpBig">4WINES</h2>
                    <h3 className="logo_sub animated fadeInUpBig">A great wine club for benginners</h3>
                    <h5 className="logo_sub animated fadeInUpBig">Try our monthly box curated by our recommendation engine</h5>

                    {/*<button className="btn btn-info btn-lg try_demo" onClick={()=>route("Quiz1")}>Try our demo</button>*/}
                   <button className="btn btn-info btn-lg try_demo">Get your box</button>
                    <div>
                         {/*<button className="btn btn-link explore_more">Explore more</button>*/}
                         {/*<button className="btn btn-primary btn-icon btn-round btn-link down_arrow_icon"><i className="now-ui-icons arrows-1_minimal-down explore_down_icon"></i></button>*/}
                    </div>

		          </div>
          </div>
		);
}

export default Main;



// <span style={{marginRight:"1rem"}}></span>