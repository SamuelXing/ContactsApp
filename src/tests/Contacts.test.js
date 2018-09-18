import React from 'react';
import { shallow } from 'enzyme';
import Contacts from '../components/Contacts';
import contacts from './contacts';

test('should render Contacts with contacts', () => {
    const wrapper = shallow(<Contacts contacts={contacts} />);
    expect(wrapper).toMatchSnapshot(); 
})