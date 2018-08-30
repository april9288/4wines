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
                    <h1>Welcome to 4WINES</h1>
                   <Quiz />
                </div>
            </div>
        </div>

		</div>
		);
}

export default FirstPG;