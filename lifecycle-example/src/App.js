import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import React from 'react';

class App extends React.Component {
  state = {
    counterIsRunning: true
  }

  stopCounter = () => {
    this.setState({
      counterIsRunning: false
    })
  }

  render() {
    const { counterIsRunning } = this.state;

    return counterIsRunning ? (
      <div className="App">
       <Counter />
       <button onClick={this.stopCounter}>Stop the counter</button>
      </div>
    ) : null
  }
}

export default App;
