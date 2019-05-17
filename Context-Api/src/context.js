import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }

}

export class Provider extends Component {
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
        ],
        dispatch: (action) => this.setState(state => reducer(state, action))

    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
