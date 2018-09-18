import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

test('should render Header with props', () => {
    const wrapper = shallow(<Header title={'title'} subtitle={'subtitle'} />);
    expect(wrapper).toMatchSnapshot();
})