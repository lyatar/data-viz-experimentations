import React, { Component } from 'react';
import './App.css';
import { csv } from 'd3-request';
import LineChart from './components/line-chart.js';


let data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


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
    console.log(data[0].earnings);
      return (
        <div className="App" >
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
              <LineChart 
               />
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }

export default App;
