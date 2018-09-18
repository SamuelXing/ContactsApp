import React from 'react';
import { shallow } from 'enzyme';
import AddContact from "../components/AddContact";

test('should render Footer correctly', () => {
    const wrapper = shallow(<AddContact />);
    expect(wrapper).toMatchSnapshot();
})
