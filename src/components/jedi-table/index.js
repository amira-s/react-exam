import React, { PureComponent } from 'react';
import './style.css';

class JediTableRow extends PureComponent {
    render() {
        const jedi = this.props.jedi;
        return (
            <tr>
                <td className="id"> #{jedi.id} </td>
                <td className="name"> {jedi.name} </td>
            </tr>
            );
    }
}

class JediTable extends PureComponent {

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
                <tbody>
                    {this.props.jedi.map((jedi, index) => (
                        <JediTableRow key={index} jedi={jedi}/>
                    ))}
                </tbody>
            </table>
            );
    }
}

export default JediTable;
