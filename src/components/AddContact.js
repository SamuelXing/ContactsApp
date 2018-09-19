import React from 'react';
import validator from 'validator';
import { Form, FormGroup, FormControl, ControlLabel, Button, Alert } from 'react-bootstrap'; 

// generate uuid, reference: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript#answer-2117523
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

export default class AddContact extends React.Component {
    
    constructor(props, context) {
        super(props, context);
    
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: false,
            error: undefined,
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        };
      }
    
      handleDismiss() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    handleAddContact = (e) => {
        e.preventDefault();
        
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
            status: active,
            shortcut: firstname.toLowerCase() + lastname.toLowerCase() + email.toLowerCase() + phone.toLowerCase()
        };

        const error = this.props.handleAddContact(contact);
        if(error){
            this.setState(() => ({ 
                error: error,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
            }));
        }
        if(!error) {
            this.setState(() => ({ 
                show: false,
                error: undefined,
                firstname: '',
                lastname: '',
                email: '',
                phone: ''
            }));
            e.target.elements.firstname.value = '';
            e.target.elements.lastname.value = '';
            e.target.elements.email.value = '';
            e.target.elements.phone.value = '';
        }
    };

    getValidFirstName = () => {
        const length = this.state.firstname.length;
        if (length > 10) return 'error';
        else if (length > 0) return 'success';
        return null;
    };

    handleFirstnameChange = (e) => {
        this.setState({ firstname: e.target.value });
    };

    getValidLastName = () => {
        const length = this.state.lastname.length;
        if (length > 10) return 'error';
        else if (length > 0) return 'success';
        return null;
    };

    handleLastnameChange = (e) => {
        this.setState({ lastname: e.target.value });
    };

    getValidEmail = () => {
        if(!this.state.email.length){
            return null;
        }
        else if(!validator.isEmail(this.state.email)) return 'error';
        else if(validator.isEmail(this.state.email) ) return 'success';
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    getValidPhone = () => {
        if(!this.state.phone.length){
            return null;
        }
        else if(!validator.isMobilePhone(this.state.phone, ['en-US'])) return 'error';
        else if(validator.isMobilePhone(this.state.phone, ['en-US']) ) return 'success';
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    render() {
        if (this.state.error) {
            return (
                <div className = "contact-add-new">
                    <Alert bsStyle="danger" className = "notification">
                        {this.state.error && <p>{this.state.error}</p>}
                    </Alert>   
                    <div className = 'centered'>
                    <Form inline onSubmit={this.handleAddContact}>
                        <FormGroup
                            controlId="formInlineFirstName"
                            validationState={this.getValidFirstName()}
                        >
                            <ControlLabel>FirstName</ControlLabel>{' '}
                            <FormControl type="text" name = "firstname" value = {this.state.firstname} placeholder="eg. Jane (0-10 characters)" onChange={this.handleFirstnameChange} />
                            <FormControl.Feedback />
                        </FormGroup>{' '}
                        <FormGroup 
                            controlId="formInlineLastName"
                            validationState={this.getValidLastName()}
                        >
                            <ControlLabel>LastName</ControlLabel>{' '}
                            <FormControl type="text" name = "lastname" value = {this.state.lastname} placeholder="eg. Doe (0-10 characters)" onChange={this.handleLastnameChange} />
                            <FormControl.Feedback />
                        </FormGroup>{' '}
                        <FormGroup 
                            controlId="formInlineEmail"
                            validationState={this.getValidEmail()}
                        >
                            <ControlLabel>Email</ControlLabel>{' '}
                            <FormControl type="email" name = "email" value = {this.state.email} placeholder="eg. jane.doe@example.com" onChange={this.handleEmailChange} />
                            <FormControl.Feedback />
                        </FormGroup>{' '}
                        <FormGroup 
                            controlId="formInlinePhone"
                            validationState={this.getValidPhone()}
                        >
                            <ControlLabel>Phone</ControlLabel>{' '}
                            <FormControl type="text" name = "phone" value = {this.state.phone} placeholder="eg. 5417543010 (U.S)" onChange={this.handlePhoneChange} />
                            <FormControl.Feedback />
                        </FormGroup>{' '}
                        <Button bsStyle="primary" type="submit">Add New</Button>
                    </Form>
                    </div>
                </div>
            );
        }

        return (
            <div className = "contact-add-new">      
                <div className = 'centered'>
                <Form inline onSubmit={this.handleAddContact}>
                    <FormGroup
                        controlId="formInlineFirstName"
                        validationState={this.getValidFirstName()}
                    >
                        <ControlLabel>FirstName</ControlLabel>{' '}
                        <FormControl type="text" name = "firstname" value = {this.state.firstname} placeholder="eg. Jane (0-10 characters)" onChange={this.handleFirstnameChange} />
                        <FormControl.Feedback />
                    </FormGroup>{' '}
                    <FormGroup 
                        controlId="formInlineLastName"
                        validationState={this.getValidLastName()}
                    >
                        <ControlLabel>LastName</ControlLabel>{' '}
                        <FormControl type="text" name = "lastname" value = {this.state.lastname} placeholder="eg. Doe (0-10 characters)" onChange={this.handleLastnameChange} />
                        <FormControl.Feedback />
                    </FormGroup>{' '}
                    <FormGroup 
                        controlId="formInlineEmail"
                        validationState={this.getValidEmail()}
                    >
                        <ControlLabel>Email</ControlLabel>{' '}
                        <FormControl type="email" name = "email" value = {this.state.email} placeholder="eg. jane.doe@example.com" onChange={this.handleEmailChange} />
                        <FormControl.Feedback />
                    </FormGroup>{' '}
                    <FormGroup 
                        controlId="formInlinePhone"
                        validationState={this.getValidPhone()}
                    >
                        <ControlLabel>Phone</ControlLabel>{' '}
                        <FormControl type="text" name = "phone" value = {this.state.phone} placeholder="eg. 5417543010 (U.S)" onChange={this.handlePhoneChange} />
                        <FormControl.Feedback />
                    </FormGroup>{' '}
                    <Button bsStyle="primary" type="submit">Add New</Button>
                </Form>
                </div>
            </div>
        );
    }
};