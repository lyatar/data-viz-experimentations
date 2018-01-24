import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis} from 'victory';

export default class LineChart extends Component {
  render() {
    console.log(this.props.data);
    return(
      <div>
        <VictoryChart theme={VictoryTheme.material} >
        <VictoryAxis dependentAxis
          orientation="left"
          style={{ 
              tickLabels: { fontSize: 9 },
            }} />
        <VictoryAxis 
            //label = "x-axis"
            style={{ 
              tickLabels: { fontSize: 5, angle: 90 },
            }} 
          />
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" }
                }}
              interpolation="natural"
              data = { this.props.data }
              x = {(data)=> data.country}

                //x={"x"}  // this is a data accessor prop, it can take string corresponding to property name
              y ={(data) => data.y} // or it can be expressed as a function odata
              //labels={(datum) => datum.y}
            />
        </ VictoryChart>
      </div>
    );
  }
}
