class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveContact = this.handleRemoveContact.bind(this);
        this.handleEditContact = this.handleEditContact.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.state = {
            contacts: ['One', 'Two', 'Three'] 
        };
    }

    // remove all 
    handleRemoveAll() {
        this.setState(() => {
            return {
                contacts: []
            };
        });
    }

    handleAddContact(contact){
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.concat(contact)
            }
        })
    }

    handleRemoveContact(contactID) {
        console.log('test remove');
    }

    handleEditContact(contactID){
        console.log('test edit');
    }

    render() {
        const title = 'Contact Management';
        const subtitle = 'A single page App to manage your contacts.';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <AddContact
                    handleAddContact = {this.handleAddContact}
                />
                <Contacts 
                    contacts={this.state.contacts}
                    handleRemoveAll = {this.handleRemoveAll}
                    handleEditContact = {this.handleRemoveContact}
                    handleEditContact = {this.handleEditContact}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddContact =this.handleAddContact.bind(this);
    }
    handleAddContact(e){
        e.preventDefault();
        
        // TODO: has to make the data type to be OBJ
        const contact = e.target.elements.option.value.trim();

        if(contact){
            this.props.handleAddContact(contact);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddContact}>
                    <input type="text" name="option" />
                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}

class Contacts extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleRemoveAll}>Remove All</button>
                {
                    this.props.contacts.map((contact) => <Contact 
                                                            key={contact} 
                                                            details={contact} 
                                                            remove = {this.props.handleRemoveContact} 
                                                            edit = {this.props.handleEditContact}
                                                        />)
                }
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div>
                contact: {this.props.details}
                <button onClick = {this.props.handleEditContact}>edit</button>
                <button onClick = {this.props.handleRemoveContact}>inactivate</button>
            </div>
        );
    }
}

ReactDOM.render(<ContactApp />, document.getElementById('app'));