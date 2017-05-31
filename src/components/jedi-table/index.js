import React, { PureComponent } from 'react';
import './style.css';
import RemoveJediButton from './RemoveJediButton';

class JediTableRow extends PureComponent {
    render() {
        const jedi = this.props.jedi;
        return (
            <tr>
                <td className="id"> #{jedi.id} </td>
                <td className="name">
                    {jedi.name}
                    <RemoveJediButton jedi={jedi}/>
                </td>
            </tr>
        );
    }
}

class JediTableHead extends PureComponent {
    render() {
        return (
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                </tr>
            </thead>
        );
    }
}

class JediTable extends PureComponent {
    render() {
        return (
            <table className="jedi-table">
                <JediTableHead />
                <tbody>
                    {this.props.jedis.map((jedi, index) => (
                        <JediTableRow key={index} jedi={jedi}/>
                    ))}
                </tbody>
            </table>
            );
    }
}

export default JediTable;
