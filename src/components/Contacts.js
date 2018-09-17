import React from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';

const Contacts = (props) => (
    <div className = "contacts-table">
        <Table striped responsive condensed hover>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Operations</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.contacts.map((contact) => (
                    <Contact 
                        key = {contact} 
                        uuid = {contact.id} 
                        firstname = {contact.firstname}
                        lastname = {contact.lastname}
                        email = {contact.email}
                        phone = {contact.phone}
                        status = {contact.status}
                        remove = {props.handleRemoveContact} 
                        edit = {props.handleEditContact}
                    />))
                }
            </tbody>
        </Table> 
        <div className = "contacts-counter">{props.contacts.length} contacts</div>   
    </div>
);

export default Contacts; 