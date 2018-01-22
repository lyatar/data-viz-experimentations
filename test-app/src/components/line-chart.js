import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory';


const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  const divStyle = {
    margin: '10px',
  };

export default (props) => {
      return(
        <div>
        <h3 style={divStyle}>Quarter vs Earnings</h3>
        <VictoryChart theme={VictoryTheme.material} >
            <VictoryLine
                data={ data}
                x = "quarter"
                y= "earnings"
                labels={(datum) => datum.y}
            />
        </ VictoryChart>
        </div>
      );
  }
