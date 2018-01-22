import React, { Component } from 'react';
import './App.css';
import LineChart from './components/line-chart.js'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App" >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            <LineChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
