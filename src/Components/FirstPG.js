import React from 'react';
import Quiz from './Quiz/Quiz';

const FirstPG = () => {
	return (
		<div>

        <div className="page-header clear-filter" filter-color="orange">
            <div className="page-header-image" data-parallax="false">
            </div>
            <div className="container first_page_container">
                <div className="content-center brand">
                    <h1 className="logo animated fadeInUpBig">4WINES</h1>
                    <h3 className="logo_sub animated fadeInUpBig">A greate way to start exploring new wines</h3>
                    <button className="btn btn-info btn-lg try_demo">Try our demo<span style={{marginRight:"1rem"}}></span><i className="now-ui-icons arrows-1_minimal-right animated infinite slideInLeft"></i><i className="now-ui-icons arrows-1_minimal-right animated infinite slideInLeft"></i></button>
                   
                    <div>
                    <button className="btn btn-link explore_more">Explore more<span style={{marginRight:"1rem"}}></span><i className="now-ui-icons arrows-1_minimal-down"></i></button>
                    </div>
                   {/*<Quiz />*/}
                </div>
                
            </div>
        </div>

		</div>
		);
}

export default FirstPG;