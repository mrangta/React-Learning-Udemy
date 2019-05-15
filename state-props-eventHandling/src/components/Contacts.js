import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Monika Rangta",
                email: "monikarangta@icloud.com",
                phone: "0987654321"
            },
            {
                id: 2,
                name: "Maneesh Chauhan",
                email: "maneesh@icloud.com",
                phone: "098765876543"
            },
            {
                id: 3,
                name: "Aahwaan Chauhan",
                email: "monikarangta@icloud.com",
                phone: "0987654321"
            }
        ]
    }

    deleteContact = (id) => {
        const { contacts } = this.state;

        const newContacts = contacts.filter(contact => contact.id !== id)
        this.setState({
            contacts: newContacts
        })
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {
                    contacts.map(contact => (
                        <Contact key={contact.id} contact={contact} deleteHandler={this.deleteContact.bind(this, contact.id)} />
                    ))
                }
            </React.Fragment>
        )
    }
}
