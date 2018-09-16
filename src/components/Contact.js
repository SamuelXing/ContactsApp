import React from 'react';
import { Button } from 'react-bootstrap';

const Contact = (props) => (
    <tr>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>
            <Button bsStyle="link" onClick = {(e) => {
                props.edit(props.details);
            }}>edit</Button>
            <Button bsStyle="link" onClick = {(e) => {
                props.remove(props.details);
            }}>remove</Button>
        </td>
    </tr>
);
export default Contact;