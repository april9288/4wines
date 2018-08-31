import React, { Component } from 'react';
import './Quiz.css';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import Quiz5 from './Quiz5';
import Quiz6 from './Quiz6';
import Quiz7 from './Quiz7';


class Quiz extends Component {
constructor() {
    super();
    this.state = {
      route : 'Quiz1'
    }
  }

 onClick = (route) => {
    this.setState({route});
  }

render() { 
        if (this.state.route === "Quiz1") {
          return <Quiz1 route={this.onClick}/>;
        } else if (this.state.route === "Quiz2") {
          return <Quiz2 route={this.onClick}/>;
        } else if (this.state.route === "Quiz3") {
          return <Quiz3 route={this.onClick}/>;
        } else if (this.state.route === "Quiz4") {
          return <Quiz4 route={this.onClick}/>;
        } else if (this.state.route === "Quiz5") {
          return <Quiz5 route={this.onClick}/>;
        } else if (this.state.route === "Quiz6") {
          return <Quiz6 route={this.onClick}/>;
        } else if (this.state.route === "Quiz7") {
          return <Quiz7 route={this.onClick}/>;
        }
}
}

export default Quiz;




