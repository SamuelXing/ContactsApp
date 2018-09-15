'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactApp = function (_React$Component) {
    _inherits(ContactApp, _React$Component);

    function ContactApp(props) {
        _classCallCheck(this, ContactApp);

        var _this = _possibleConstructorReturn(this, (ContactApp.__proto__ || Object.getPrototypeOf(ContactApp)).call(this, props));

        _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
        _this.handleRemoveContact = _this.handleRemoveContact.bind(_this);
        _this.handleEditContact = _this.handleEditContact.bind(_this);
        _this.handleAddContact = _this.handleAddContact.bind(_this);
        _this.state = {
            contacts: ['One', 'Two', 'Three']
        };
        return _this;
    }

    // remove all 


    _createClass(ContactApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    contacts: []
                };
            });
        }
    }, {
        key: 'handleAddContact',
        value: function handleAddContact(contact) {
            this.setState(function (prevState) {
                return {
                    contacts: prevState.contacts.concat(contact)
                };
            });
        }
    }, {
        key: 'handleRemoveContact',
        value: function handleRemoveContact(contactID) {
            console.log('test remove');
        }
    }, {
        key: 'handleEditContact',
        value: function handleEditContact(contactID) {
            console.log('test edit');
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Contact Management';
            var subtitle = 'A single page App to manage your contacts.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(AddContact, {
                    handleAddContact: this.handleAddContact
                }),
                React.createElement(Contacts, _defineProperty({
                    contacts: this.state.contacts,
                    handleRemoveAll: this.handleRemoveAll,
                    handleEditContact: this.handleRemoveContact
                }, 'handleEditContact', this.handleEditContact))
            );
        }
    }]);

    return ContactApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var AddContact = function (_React$Component3) {
    _inherits(AddContact, _React$Component3);

    function AddContact(props) {
        _classCallCheck(this, AddContact);

        var _this3 = _possibleConstructorReturn(this, (AddContact.__proto__ || Object.getPrototypeOf(AddContact)).call(this, props));

        _this3.handleAddContact = _this3.handleAddContact.bind(_this3);
        return _this3;
    }

    _createClass(AddContact, [{
        key: 'handleAddContact',
        value: function handleAddContact(e) {
            e.preventDefault();

            // TODO: has to make the data type to be OBJ
            var contact = e.target.elements.option.value.trim();

            if (contact) {
                this.props.handleAddContact(contact);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddContact },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Contact'
                    )
                )
            );
        }
    }]);

    return AddContact;
}(React.Component);

var Contacts = function (_React$Component4) {
    _inherits(Contacts, _React$Component4);

    function Contacts() {
        _classCallCheck(this, Contacts);

        return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).apply(this, arguments));
    }

    _createClass(Contacts, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveAll },
                    'Remove All'
                ),
                this.props.contacts.map(function (contact) {
                    return React.createElement(Contact, {
                        key: contact,
                        details: contact,
                        remove: _this5.props.handleRemoveContact,
                        edit: _this5.props.handleEditContact
                    });
                })
            );
        }
    }]);

    return Contacts;
}(React.Component);

var Contact = function (_React$Component5) {
    _inherits(Contact, _React$Component5);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'contact: ',
                this.props.details,
                React.createElement(
                    'button',
                    { onClick: this.props.handleEditContact },
                    'edit'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.handleRemoveContact },
                    'inactivate'
                )
            );
        }
    }]);

    return Contact;
}(React.Component);

ReactDOM.render(React.createElement(ContactApp, null), document.getElementById('app'));
