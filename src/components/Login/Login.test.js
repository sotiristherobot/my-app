import React from 'react';
import { mount, shallow } from 'enzyme';
import { Login } from "grommet-icons";

import LoginForm from './Login';

const setup = () => {
    const props = {
        actions: {
            onItemSaveClick: jest.fn()
        }
    };
    return props;
};

describe('<Login/>', () => {
    let {actions} = setup();
   const wrapper = mount(<LoginForm {...actions} />);

   it('should have username textfield defined', () => {
       expect(wrapper.find('input[name="username"]').exists()).toBe(true);
   });

    it('should have password textfield defined', () => {
        expect(wrapper.find('input[name="password"]').exists()).toBe(true);
    });


    it('should have a login button defined', () => {
        const button = wrapper.find('button');
        expect(button).toBeDefined();
        expect(button.render().text()).toBe('Save');

    });
    it('should call onLoginButtonClick when button is clicked', () => {
        const button = wrapper.find('button');
        wrapper.instance().onLoginButtonClick = jest.fn();
        wrapper.instance().forceUpdate();
        wrapper.update();

        button.find('button').simulate('click');
        expect(wrapper.instance().onLoginButtonClick).toBeCalled();
    });
});