import React, { Component } from 'react';
import { render } from 'react-dom';
import Quiz from './Quiz.jsx';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ECECEC", height: "100vh", fontFamily: "Verdana" }}>
        <Quiz/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
