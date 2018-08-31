import React, { Component } from 'react';
import Main from './Main';
import Quiz from './Quiz/Quiz';

class FirstPG extends Component {
constructor() {
    super();
    this.state = {
      quiz : 'no'
    }
  }

 onClick = (quiz) => {
    this.setState({quiz});
  }

render() {
	return (
		<div>

        <div className="page-header clear-filter" filter-color="orange">
            <div className="page-header-image" data-parallax="false">
            </div>

            <div className="container">
            <div className="content-center brand">
                {
                    (this.state.quiz === "no") ? <Main quiz={this.onClick} /> : <Quiz />
                }
            </div>
            </div>
        </div>
		</div>
		);
}
}

export default FirstPG;

