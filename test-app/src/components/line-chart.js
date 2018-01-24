import React from 'react';
import { VictoryLine, VictoryChart, VictoryTheme} from 'victory';


const divStyle = {
  margin: '10px',
};

export default (props) => {
      return(
        <div>
        <h3 style={divStyle}>Quarter vs Earnings</h3>
        <VictoryChart theme={VictoryTheme.material} >
            <VictoryLine
               data = { this.props }
                //x={"x"}  // this is a data accessor prop, it can take a string corresponding to property name
                //y={(d) => d.y} // or it can be expressed as a function of data
                //labels={(datum) => datum.y}
            />
        </ VictoryChart>
        </div>
      );
  }
