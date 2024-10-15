import React, { Component } from 'react';

// Functional component for rendering individual rows
const TableRow = ({ data }) => {
    const { id, name, email, password, course, city } = data;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{course}</td>
            <td>{city}</td>
        </tr>
    );
};

class Data extends Component {
    render() {
        const { explorer } = this.props;


        return (
            <div style={{ margin: 'auto', width: '80%' }}align='center' >
                <h1>STUDENT DATA</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse',}} border={4} cellPadding={8} >
                    <thead>
                        <tr>
                            <th>SrNo.</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>COURSE</th>
                            <th>CITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {explorer.map((data, index) => (
                            <TableRow key={data.grid || index} data={data} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Data;
