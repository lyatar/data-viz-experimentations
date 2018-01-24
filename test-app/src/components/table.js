import React, { Component } from 'react';

export default class Table extends Component {
    render(){
        return (
            <div>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Country</th>
                            <th>Birth Rate</th>
                            <th>Death Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>oh</td>
                            <td>my</td>
                            <td>dog</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>oh</td>
                            <td>my</td>
                            <td>dog</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>oh</td>
                            <td>my</td>
                            <td>dog</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        );
    }
}