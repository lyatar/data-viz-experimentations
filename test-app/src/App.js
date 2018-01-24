import React, { Component } from 'react';
import './App.css';
import { csv } from 'd3-request';
import LineChart from './components/line-chart.js';
import Table from './components/table.js'

const divStyle = {
  margin: '10px'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    csv('./data/birthdeathrates.csv', (error, data) => {
      if (error) {
        this.setState({loadError: true});
      }
      this.setState({
        data: data.map(d => ({...d, x: Number(d.birth), y: Number(d.death)}))
      });
    })
  }

  render() {
    console.log(this.state.data);
    console.log(this.state.data);
      return (
        <div className="App" >
          <div className="container">
            <h2 style={divStyle}>Birth Rate</h2>
            <div className="row">
              <div className="col-sm-8">
                  <LineChart 
                    data = {this.state.data}
                  />
              </div>
              <div className="col-sm-4">
                  <LineChart 
                    data = {this.state.data}
                  />
                  <Table />
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }

export default App;
