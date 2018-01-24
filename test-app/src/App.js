import React, { Component } from 'react';
import './App.css';
import { csv } from 'd3-request';
import LineChart from './components/line-chart.js';

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
            <div className="row">
              <div className="col-sm-7">
                  <LineChart 
                    data = {this.state.data}
                  />
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }

export default App;
