import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../js/actions/index';

function mapDispatchToProps(dispatch) {
    return {
        addUser: user => dispatch(addUser(user))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no: "",
            name: "",
            country: "",
            city: "",
            salary: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { no, name, country, city, salary } = this.state;
        this.props.addUser({
            no: no,
            name: name,
            country: country,
            city: city,
            salary: salary
        });
    }
    render() {
        const { no, name, country, city, salary } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="no">No</label>
                    <input
                        id="no"
                        value={no}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                        id="country"
                        value={country}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        value={city}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="salary">Salary</label>
                    <input
                        id="salary"
                        value={salary}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Save</button>
                </div>
            </form>
        )
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;