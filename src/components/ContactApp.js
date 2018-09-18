import React from 'react';
import AddContact from './AddContact';
import Contacts from './Contacts';
import Header from './Header';
import Footer from './Footer';
import validator from 'validator';

// TODO: Footer
import {Grid, Row, Col} from 'react-bootstrap';

export default class ContactApp extends React.Component {
    state = {
        contacts: []
    };

    handleAddContact = (contact) => {
        // Tvalidate input
        if(!contact) return 'INVALID INPUTS: Enter valid value to add item';
        else if(!contact.firstname) return 'INVALID INPUTS: FirstName is empty';
        else if(contact.firstname.length > 10) return 'INVALID INPUTS: FirstName is invalid'
        else if(!contact.lastname) return 'INVALID INPUTS: LastName is empty';
        else if(contact.lastname.length > 10) return 'INVALID INPUTS: LastName is invalid'
        else if(!contact.email) return 'INVALID INPUTS: Email is empty';
        else if(!validator.isEmail(contact.email)) return 'INVALID INPUTS: Email is invalid';
        else if(!contact.phone) return 'INVALID INPUTS: Phone is empty';
        else if(!validator.isMobilePhone(contact.phone, ['en-US'])) return "INVALID INPUTS: Phone is invalid";

        // check if the contact has already existed
        const result = this.state.contacts.filter(obj => {
            return obj.shortcut === contact.shortcut;
        });
        if(result.length !== 0) return 'INVALID INPUTS: Contact had already added';
        
        this.setState((prevState) => ({
            contacts: prevState.contacts.concat([contact])
        }));
    };

    handleRemoveContact = (contactId) => {
        this.setState((prevState) => ({ 
            contacts: prevState.contacts.filter((contact) => {
                return contactId !== contact.id;
            })
        }));
    };

    handleChangeStatus = (contactId) => {
        const contacts = this.state.contacts;
        
        for(let i = 0; i < contacts.length; i++){
            if(contacts[i].id === contactId){
                contacts[i].status = !contacts[i].status;
            }
        }

        const json = JSON.stringify(contacts);
        localStorage.setItem('contacts', json);

        this.setState(() => ({
            contacts: contacts
        }));
    };

    handleEditContact = (contactId, firstname, lastname, email, phone) => {
        const contacts = this.state.contacts;
        if(!firstname) return 'INVALID INPUTS: FirstName is empty';
        if(firstname.length > 10) return 'INVALID INPUTS: FirstName is invalid'
        if(!lastname) return 'INVALID INPUTS: LastName is empty';
        if(lastname.length > 10) return 'INVALID INPUTS: LastName is invalid'
        if(!email) return 'INVALID INPUTS: Email is empty';
        if(!validator.isEmail(email)) return 'INVALID INPUTS: Email is invalid';
        if(!phone) return 'INVALID INPUTS: Phone is empty';
        if(!validator.isMobilePhone(phone, ['en-US'])) return "INVALID INPUTS: Phone is invalid";

        for(let i = 0; i < contacts.length; i++){
            if(contacts[i].shortcut === firstname.toLowerCase() + lastname.toLowerCase() + email.toLowerCase() + phone.toLowerCase()){
                return 'INVALID INPUTS: Contact had already added';
            }
            if(contacts[i].id === contactId){
                contacts[i].firstname = firstname;
                contacts[i].lastname = lastname;
                contacts[i].email = email;
                contacts[i].phone = phone;
            }
        }

        const json = JSON.stringify(contacts);
        localStorage.setItem('contacts', json);

        this.setState(() => ({
            contacts: contacts
        }));
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
            <Grid fluid>
                <Row>
                    <Col md = {12} >
                        <Header title={title} subtitle={subtitle} />
                        <div>
                        <AddContact
                            handleAddContact = {this.handleAddContact}
                        />
                        <Contacts 
                            contacts = {this.state.contacts}
                            handleRemoveContact = {this.handleRemoveContact}
                            handleEditContact = {this.handleEditContact}
                            handleChangeStatus = {this.handleChangeStatus}
                        />
                        </div>   
                    </Col>
                </Row>
                <Footer />
            </Grid>
        )
    }
};

ContactApp.defaultProps = {
    contacts: []
}
