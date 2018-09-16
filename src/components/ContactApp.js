import React from 'react';
import AddContact from './AddContact';
import Contacts from './Contacts';
import Header from './Header';

// TODO: Footer
import {Grid, Row, col, Navbar} from 'react-bootstrap';

export default class ContactApp extends React.Component {
    state = {
        contacts: []
    };

    handleAddContact = (contact) => {
        // TODO: validate input
        if(!contact) {
            return 'Enter valid value to add item';
        } 
        // TODO: check if the contact has already existed

        this.setState((prevState) => ({
            contacts: prevState.contacts.concat([contact])
        }));
    };

    handleRemoveContact = (contactToRemove) => {
        this.setState((prevState) => ({ 
            contacts: prevState.contacts.filter((contact) => {
                return contactToRemove !== contact;
            })
        }));
    };

    handleEditContact = (contact) => {
        console.log('edit');
        console.log(contact);
    };
 
    componentDidMount() {
        try {
            const json = localStorage.getItem('contacts');
            const contacts = JSON.parse(json);
    
            // rendering contacts when not null
            if(contacts) {
                this.setState(() => ({ contacts }));
            }
        } catch (e) {
            // Do nothing, if json invalid
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contacts.length !== this.state.contacts.length) {
            const json = JSON.stringify(this.state.contacts);
            localStorage.setItem('contacts', json);
        }
        console.log('saving data');
    };

    render() {
        const title = 'Contacts';
        const subtitle = 'A single page App to manage your contacts.';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <AddContact
                    handleAddContact = {this.handleAddContact}
                />
                <Contacts 
                    contacts={this.state.contacts}
                    handleRemoveContact = {this.handleRemoveContact}
                    handleEditContact = {this.handleEditContact}
                />
            </div>
        )
    }
};

ContactApp.defaultProps = {
    contacts: []
}
