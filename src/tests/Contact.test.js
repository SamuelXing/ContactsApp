import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../components/Contact';
import contacts from './contacts';

test('should render Contacts with contacts', () => {
    const wrapper = shallow(<Contact 
                            key = {contacts[0].id} 
                            uuid = {contacts[0].id} 
                            firstname = {contacts[0].firstname}
                            lastname = {contacts[0].lastname}
                            email = {contacts[0].email}
                            phone = {contacts[0].phone}
                            status = {contacts[0].status}
                        />);
    expect(wrapper).toMatchSnapshot(); 
})