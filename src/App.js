import React, { Component } from 'react';
import Circle from './components/circle.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      percent: 0
    }
  }
  render() {
    setTimeout(() => this.setState({
      percent: this.state.percent + 1
    }), 30)
    return (
      <Circle percent={this.state.percent}></Circle>
    );
  }
}

export default App;
