import React from 'react';
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {
                props.contacts.map((contact) => (
                                    <Contact 
                                        key={contact} 
                                        details={contact} 
                                        remove = {props.handleRemoveContact} 
                                        edit = {props.handleEditContact}
                                    />))
            }
        </div>
    );
}

export default Contacts; 