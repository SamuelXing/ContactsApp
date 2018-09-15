import React from 'react';
import AddContact from './AddContact';
import Contacts from './Contacts';
import Header from './Header';

export default class ContactApp extends React.Component {
    state = {
        contacts: []
    };

    // remove all 
    handleRemoveAll = () => {
        this.setState(() => ({ contacts: [] }));
    };

    handleAddContact = (contact) => {
        // TODO: validate input
        if(!contact) {
            return 'Enter valid value to add item';
        } else if (this.state.contacts.indexOf(contact) > -1) {
            return 'This contact already exists'
        } 

        this.setState((prevState) => ({
            contacts: prevState.contacts.concat(contact)
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
                    handleRemoveAll = {this.handleRemoveAll}
                    handleRemoveContact = {this.handleRemoveContact}
                    handleEditContact = {this.handleEditContact}
                />
            </div>
        )
    }
};

class ContactInfo {
    constructor(firstName, lastName, email, phone, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.status = status;
    }
};

ContactApp.defaultProps = {
    contacts: []
}
