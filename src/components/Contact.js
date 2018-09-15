import React from 'react';

const Contact = (props) => {
    return (
        <div>
            contact: {props.details}
            <button onClick = {(e) => {
                props.edit(props.details);
            }}>edit</button>
            <button onClick = {(e) => {
                props.remove(props.details);
            }}>remove</button>
        </div>
    );
}

export default Contact;