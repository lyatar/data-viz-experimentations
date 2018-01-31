import React, { Component } from 'react';

const tableStyle = {
    height: '250px',
    overflow: 'auto',
};

export default class Table extends Component {
    render(){
        const rows = [];
        const rows2 = [];
        const rows3 = [];


    // temporary methods for displaying table data showing tables (need to refactor)
        if(this.props.data) {
            (this.props.data.forEach((row) => rows.push(<tr key={row.country}> {row.country} </tr>)));
         }
        if(this.props.data) {
            (this.props.data.forEach((row) => rows2.push(<tr key={row.x.toString()}> {row.x} </tr>)));
         }
         if(this.props.data) {
            (this.props.data.forEach((row) => rows3.push(<tr key={row.y.toString()}> {row.y} </tr>)));
         }
        // if (this.props.data) {
        //     const rowItems = this.props.data.map((row) => console.log(<th key={row.toString()}> {row} </th>));
        //     };

        return (
            <div>
                <table className="table table-bordered table-striped table-responsive" style={tableStyle}> 
                    <thead>
                        <tr>
                            <th scope="row"></th>
                            <th style={{color: 'grey'}}>Country</th>
                            <th>Birth Rate</th>
                            <th>Death Rate</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <th></th>
                        <th>
                            {rows}
                        </th>
                        <th>
                            {rows2}
                        </th>
                        <th>
                            {rows3}
                        </th>


                    </tbody>

                </table>
            </div>
        );
    }
}