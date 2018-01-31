import React, { Component } from 'react';
import './App.css';
import { csv } from 'd3-request';
import LineChart from './components/line-chart.js';
import Table from './components/table.js'
import BarChart from './components/bar-chart.js'

const divStyle = {
  margin: '10px',
  padding: '25px 25px 0 25px'
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
      return (
        <div className="App" >
          <div className="container">

            <h2 style={divStyle}>BIRTH RATE</h2>
            <p><i>This is a data set of birth rates per country. The full dataset can be found at <a href="https://github.com/vincentarelbundock/Rdatasets/blob/master/csv/HSAUR/birthdeathrates.csv">here</a></i></p>
            <div className="row">
              <div className="col-sm-8">
                  <LineChart 
                    data = {this.state.data}
                  />
              </div>
              <div className="col-sm-4">
                  <BarChart 
                    data = {this.state.data}
                  />
                  <Table 
                    data = {this.state.data}
                  />
              </div>
              
            </div>
            <p>Note: The chosen methods of graphing and the dataset are not connected as this is an exercise attempting to graph categorical data that had a numerical value (because there really no connection between the birthrate of egy and ghana other than their alphabetical ordering)</p>
          </div>
        </div>
        
      );
    }
  }

export default App;
