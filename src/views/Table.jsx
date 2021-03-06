import React from 'react';
import { connect } from 'react-redux';

import Form from '../components/User/Form.jsx';

const mapStateToProps = state => {
    return { users: state.users };
}

const ConnectedTable = ({ users }) => {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className = "row">
                    <div className="col-md-12">
                        <Form />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title ">Simple Table</h4>
                                <p className="card-category"> Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className=" text-primary">
                                            <tr>
                                                <th>
                                                    ID
                                                </th>
                                                <th>
                                                    Name
                                                </th>
                                                <th>
                                                    Country
                                                </th>
                                                <th>
                                                    City
                                                </th>
                                                <th>
                                                    Salary
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(( val, idx) => (
                                                    <tr key={idx}>
                                                        <td>{val.no}</td>
                                                        <td>{val.name}</td>
                                                        <td>{val.country}</td>
                                                        <td>{val.city}</td>
                                                        <td>{val.salary}</td>
                                                    </tr>
                                                ))
                                            }
                                            <tr>
                                                <td>
                                                    1
                          </td>
                                                <td>
                                                    Dakota Rice
                          </td>
                                                <td>
                                                    Niger
                          </td>
                                                <td>
                                                    Oud-Turnhout
                          </td>
                                                <td className="text-primary">
                                                    $36,738
                          </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card card-plain">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title mt-0"> Table on Plain Background</h4>
                                <p className="card-category"> Here is a subtitle for this table</p>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead className="">
                                            <tr>
                                                <th>
                                                    ID
                        </th>
                                                <th>
                                                    Name
                        </th>
                                                <th>
                                                    Country
                        </th>
                                                <th>
                                                    City
                        </th>
                                                <th>
                                                    Salary
                        </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                          </td>
                                                <td>
                                                    Dakota Rice
                          </td>
                                                <td>
                                                    Niger
                          </td>
                                                <td>
                                                    Oud-Turnhout
                          </td>
                                                <td>
                                                    $36,738
                          </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2
                          </td>
                                                <td>
                                                    Minerva Hooper
                          </td>
                                                <td>
                                                    Curaçao
                          </td>
                                                <td>
                                                    Sinaai-Waas
                          </td>
                                                <td>
                                                    $23,789
                          </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3
                          </td>
                                                <td>
                                                    Sage Rodriguez
                          </td>
                                                <td>
                                                    Netherlands
                          </td>
                                                <td>
                                                    Baileux
                          </td>
                                                <td>
                                                    $56,142
                          </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4
                          </td>
                                                <td>
                                                    Philip Chaney
                          </td>
                                                <td>
                                                    Korea, South
                          </td>
                                                <td>
                                                    Overland Park
                          </td>
                                                <td>
                                                    $38,735
                          </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5
                          </td>
                                                <td>
                                                    Doris Greene
                          </td>
                                                <td>
                                                    Malawi
                          </td>
                                                <td>
                                                    Feldkirchen in Kärnten
                          </td>
                                                <td>
                                                    $63,542
                          </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6
                          </td>
                                                <td>
                                                    Mason Porter
                          </td>
                                                <td>
                                                    Chile
                          </td>
                                                <td>
                                                    Gloucester
                          </td>
                                                <td>
                                                    $78,615
                          </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Table = connect(mapStateToProps)(ConnectedTable);

export default Table;