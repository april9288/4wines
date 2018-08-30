import React from 'react';

const Navigation = () => {
	return (
		<div>
		<nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
	        <div className="container">
	            <div className="navbar-translate">
	                <a className="navbar-brand" rel="tooltip" title="Welcome to 4wines" data-placement="bottom" target="_blank">
	                    4wines
	                </a>
	                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
	                    <span className="navbar-toggler-bar bar1"></span>
	                    <span className="navbar-toggler-bar bar2"></span>
	                    <span className="navbar-toggler-bar bar3"></span>
	                </button>
	            </div>

            <div className="collapse navbar-collapse justify-content-end" data-nav-image="./assets/img/blurred-image-1.jpg">
                <ul className="navbar-nav">
                    <li className="nav-item">

                        <a className="nav-link" rel="noopener noreferrer" title="Follow us on Github" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                            <i className="fa fa-github"></i>
                            <p className="d-lg-none d-xl-none">Github</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="noopener noreferrer" title="Follow us on Linked" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                            <i className="fa fa-linkedin"></i>
                            <p className="d-lg-none d-xl-none">Linkedin</p>
                        </a>
                    </li>
                </ul>
            </div>

	        </div>
	    </nav>
    

		</div>
		);
}

export default Navigation;