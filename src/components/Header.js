import React from 'react';
import { Navbar, NavItem, Nav} from 'react-bootstrap';

const Header = (props) => (
    <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">ContactsApp</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Star
                </NavItem>
                <NavItem eventKey={2} href="#">
                    Fork
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className = "header">
            <div className = "container">
                <h1 className = "header__title">{props.title}</h1> 
                <h2 className = "header__subtitle">{props.subtitle}</h2>
            </div>
        </div>
    </div>
);

export default Header;