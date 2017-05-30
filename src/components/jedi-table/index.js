import React, { Component } from 'react';
import './style.css'

class JediTable extends Component {

    renderJediList() {
        return (
            this.props.jedi.map((jedi, index) => (
                            <tr key={index}>
                                <td className="id"> #{jedi.id} </td>
                                <td className="name"> {jedi.name} </td>
                            </tr>
            ))
        );
    }


    renderTableHead() {
        return (
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                </tr>
            </thead>
            );
    }

    render() {
        return (
            <table className="jedi-table">
                {this.renderTableHead()}
                <tbody>{this.renderJediList()}</tbody>
            </table>
            );
    }
}

export default JediTable;
