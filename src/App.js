import React, { Component } from 'react';

import './Quiz/Quiz.css';
import Quiz1 from './Quiz/Quiz1';
import Quiz2 from './Quiz/Quiz2';
import Quiz3 from './Quiz/Quiz3';
import Quiz4 from './Quiz/Quiz4';
import Quiz5 from './Quiz/Quiz5';

class App extends Component {
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

    let showThis;
    if (this.state.route === "Quiz1") {
      showThis = (<Quiz1 route={this.onClick}/>)
    } else if (this.state.route === "Quiz2") {
      showThis = (<Quiz2 route={this.onClick}/>)
    } else if (this.state.route === "Quiz3") {
      showThis = (<Quiz3 route={this.onClick}/>)
    } else if (this.state.route === "Quiz4") {
      showThis = (<Quiz4 route={this.onClick}/>)
    } else if (this.state.route === "Quiz5") {
      showThis = (<Quiz5 route={this.onClick}/>)
    }



    return (
      <div className="App">
      {showThis}
      </div>
    );
  }
}

export default App;
