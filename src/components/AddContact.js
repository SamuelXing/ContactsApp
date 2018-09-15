import React from 'react';

export default class AddContact extends React.Component {
    state = {
        error: undefined
    };

    handleAddContact = (e) => {
        e.preventDefault();
        
        // TODO: has to make the data type to be OBJ
        const contact = e.target.elements.firstname.value.trim();
        const error = this.props.handleAddContact(contact)
        
        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.firstname.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddContact}>
                    <input type="text" name="firstname" />
                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
};