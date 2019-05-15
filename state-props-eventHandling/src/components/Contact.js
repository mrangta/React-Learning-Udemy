import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showDetails: false
    }
    static propTypes = {
        contact: PropTypes.object.isRequired
    }

    showOnClick = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
        const { name, email, phone } = this.props.contact;
        const { showDetails } = this.state;
        return (
            <div className="card card-body mb-3">
                <h4>{name} {' '}
                    <i onClick={this.showOnClick} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                    <i onClick={this.props.deleteHandler} className="fas fa-times" style={{ color: 'red', float: 'right', cursor: 'pointer' }}></i>
                </h4>
                {showDetails ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>) : null}

            </div>
        )
    }
}

export default Contact;

