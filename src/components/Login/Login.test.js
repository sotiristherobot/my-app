import React from 'react';
import { mount } from 'enzyme';
import { Login } from "grommet-icons";

import LoginForm from './Login';

const setup = () => {
    const props = {
        actions: {
            onTextFieldInputChange: jest.fn(),
            title: 'title',
            content: 'content'
        }
    };
    return props;
};

describe('<Login/>', () => {
   const wrapper = mount(<LoginForm />);

   it('should have username textfield defined', () => {
       expect(wrapper.find('input[name="username"]').exists()).toBe(true);
   });

    it('should have password textfield defined', () => {
        expect(wrapper.find('input[name="password"]').exists()).toBe(true);
    });



});