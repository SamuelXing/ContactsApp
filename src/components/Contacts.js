import React from 'react';
import Contact from './Contact';
import { Table } from 'react-bootstrap';

const Contacts = (props) => (
    <div>
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
                        key = {contact.id} 
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
    </div>
);

export default Contacts; 