import React, { Component } from 'react';
import Main from './Main';

import './Quiz/Quiz.css';
import Quiz1 from './Quiz/Quiz1';
import Quiz2 from './Quiz/Quiz2';
import Quiz3 from './Quiz/Quiz3';
import Quiz4 from './Quiz/Quiz4';
import Quiz5 from './Quiz/Quiz5';
import Quiz6 from './Quiz/Quiz6';
import Quiz7 from './Quiz/Quiz7';

class FirstPG extends Component {
constructor() {
    super();
    this.state = {
      route : 'main'
    }
  }

 onClick = (route) => {
    this.setState({route});
  }

render() {

    let showThis;
    if (this.state.route === "main") {
      showThis = (<Main route={this.onClick} />)
    } else if (this.state.route === "Quiz1") {
      showThis = (<Quiz1 route={this.onClick}/>)
    } else if (this.state.route === "Quiz2") {
      showThis = (<Quiz2 route={this.onClick}/>)
    } else if (this.state.route === "Quiz3") {
      showThis = (<Quiz3 route={this.onClick}/>)
    } else if (this.state.route === "Quiz4") {
      showThis = (<Quiz4 route={this.onClick}/>)
    } else if (this.state.route === "Quiz5") {
      showThis = (<Quiz5 route={this.onClick}/>)
    } else if (this.state.route === "Quiz6") {
      showThis = (<Quiz6 route={this.onClick}/>)
    } else if (this.state.route === "Quiz7") {
      showThis = (<Quiz7 route={this.onClick}/>)
    }



	return (
		<div>

        <div className="page-header clear-filter" filter-color="orange">
            <div className="page-header-image" data-parallax="false"></div>

            <div className="container">
            <div className="content-center brand">
                {   
                    showThis
                }
            </div>
            </div>
        </div>
		</div>
		);
}
}

export default FirstPG;

