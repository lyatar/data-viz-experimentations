import React, { Component } from 'react';

const tableStyle = {
    height: '100%',
    overflow: 'auto',
};

export default class Table extends Component {
    render(){
        console.log("from table " + this.props.data);
        const numbers = [1, 2, 35];
        const listItems = numbers.map ((number) => <th key={number.toString()}> {number} </th>); 
        const listItems2 = numbers.map ((number) => <th key={number.toString()}> {number} </th>); 
        return (
            <div>
                <table className="table table-bordered table-striped table-responsive" style={tableStyle}> 
                    <thead>
                        <tr>
                            <th scope="row"></th>
                            <th>Country</th>
                            <th>Birth Rate</th>
                            <th>Death Rate</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr> 
                            <th scope="row">1</th>
                            {listItems}
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            {listItems2}
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            {listItems2}
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            {listItems2}
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}