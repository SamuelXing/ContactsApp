import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'; 

// generate uuid, reference: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#answer-2117523
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

export default class AddContact extends React.Component {
    state = {
        error: undefined
    };

    handleAddContact = (e) => {
        e.preventDefault();
        
        // TODO: has to make the data type to be OBJ
        const id = uuidv4();
        const firstname = e.target.elements.firstname.value.trim();
        const lastname = e.target.elements.lastname.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.phone.value.trim();
        const active = true;

        const contact = {
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            active: active
        };

        const error = this.props.handleAddContact(contact);
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.firstname.value = '';
            e.target.elements.lastname.value = '';
            e.target.elements.email.value = '';
            e.target.elements.phone.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}

                <Form inline onSubmit={this.handleAddContact}>
                    <FormGroup controlId="formInlineFirstName">
                        <ControlLabel>FirstName</ControlLabel>{' '}
                        <FormControl type="text" name = "firstname" placeholder="eg. Jane" />
                    </FormGroup>{'      '}
                    <FormGroup controlId="formInlineLastName">
                        <ControlLabel>LastName</ControlLabel>{' '}
                        <FormControl type="text" name = "lastname" placeholder="eg. Doe" />
                    </FormGroup>{'      '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name = "email" placeholder="eg. jane.doe@example.com" />
                    </FormGroup>{'      '}
                    <FormGroup controlId="formInlinePhone">
                        <ControlLabel>Phone</ControlLabel>{' '}
                        <FormControl type="text" name = "phone" placeholder="eg. xxx-xxx-xxxx" />
                    </FormGroup>{'      '}
                    <Button bsStyle="primary" type="submit">Add New</Button>
                </Form>
            </div>
        );
    }
};