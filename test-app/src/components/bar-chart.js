import React, {Component} from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryZoomContainer } from 'victory';

export default class BarChart extends Component {
    render() {
        return(
            <div>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
                //domain={{x: [0, 5]}}
                containerComponent={<VictoryZoomContainer zoomDomain={{x: [0, 10], y: [0, 40]}}/>}
                
            >
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={this.props.data}
                    x = {(data)=> data.country}
                    y ={(data) => data.y}
                    labels={(d) => `y: ${d.y}`}
                    
                />
            </VictoryChart>
            </div>
        )
    }
}