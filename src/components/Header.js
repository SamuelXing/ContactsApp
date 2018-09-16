import React from 'react';
import { Navbar, NavItem, Nav, PageHeader} from 'react-bootstrap';

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
        <PageHeader>
            {props.title} <small>{props.subtitle}</small>
        </PageHeader>
    </div>
);

export default Header;