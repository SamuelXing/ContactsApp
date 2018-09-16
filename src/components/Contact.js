import React from 'react';
import validator from 'validator';
import { Button, Modal, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';

export default class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            error: undefined,
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            email: this.props.email,
            phone: this.props.phone,
            uuid: this.props.uuid
        };
    }

    handleEditContact = (e) => {
        e.preventDefault();
        const firstname = e.target.elements.firstname.value.trim();
        const lastname = e.target.elements.lastname.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.phone.value.trim();

        const error = this.props.edit(this.state.uuid, firstname, lastname, email, phone);
        this.setState(() => ({ error }));
        if(!error) {
            e.target.elements.firstname.value = '';
            e.target.elements.lastname.value = '';
            e.target.elements.email.value = '';
            e.target.elements.phone.value = '';
        }
        this.handleClose();
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

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
        return (
            <tr>
                <td>{this.props.firstname}</td>
                <td>{this.props.lastname}</td>
                <td>{this.props.email}</td>
                <td>{this.props.phone}</td>
                <td>
                    <Button bsStyle="link" onClick = {this.handleShow}>edit</Button>
                    <Button bsStyle="link" onClick = {(e) => {
                        this.props.remove(this.props.uuid);
                    }}>remove</Button>
                </td>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.error && <p>{this.state.error}</p>}
                        <Form horizontal onSubmit={this.handleEditContact}>
                            <FormGroup
                                controlId="formInlineFirstName"
                                validationState={this.getValidFirstName()}
                            >
                            <Col componentClass={ControlLabel} sm={2}>
                                FirstName
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name = "firstname" value = {this.state.firstname} placeholder="eg. Jane (0-10 characters)" onChange={this.handleFirstnameChange} />
                            </Col>
                            
                            </FormGroup>
                            <FormGroup 
                                controlId="formInlineLastName"
                                validationState={this.getValidLastName()}
                            >
                            <Col componentClass={ControlLabel} sm={2}>
                                LastName
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name = "lastname" value = {this.state.lastname} placeholder="eg. Doe (0-10 characters)" onChange={this.handleLastnameChange} />
                            </Col>   
                            
                            </FormGroup>
                            <FormGroup 
                                controlId="formInlineEmail"
                                validationState={this.getValidEmail()}
                            >
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" name = "email" value = {this.state.email} placeholder="eg. jane.doe@example.com" onChange={this.handleEmailChange} />
                            </Col>
                            
                            </FormGroup>
                            <FormGroup 
                                controlId="formInlinePhone"
                                validationState={this.getValidPhone()}
                            >
                            <Col componentClass={ControlLabel} sm={2}>
                                Phone
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" name = "phone" value = {this.state.phone} placeholder="eg. xxx-xxx-xxxx (U.S)" onChange={this.handlePhoneChange} />
                            </Col>
                            
                            </FormGroup>
                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button bsStyle="primary" type="submit">Confirm</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </tr>
        );
    }
}
