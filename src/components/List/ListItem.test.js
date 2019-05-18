import React from 'react';
import { mount } from 'enzyme';

import ListItem from './ListItem';

const setup = () => {
  const props = {
      actions: {
          onTextFieldInputChange: jest.fn()
      }
  };
  return props;
};

describe('<ListItem/>', () => {
    let {actions} = setup();
    debugger;
    const wrapper = mount(<ListItem {...actions}/>);

    it('should render title textfield', () => {
       expect(wrapper.find('input[name="title"]').exists()).toBe(true);
    });

    it('should render content textfield', () => {
        expect(wrapper.find('input[name="content"]').exists()).toBe(true);
    });

    it('textfields should call onTextFieldInputChange', () => {
        const titleField = wrapper.find('input[name="title"]'),
            contentField = wrapper.find('input[name="content"]');

        expect(actions.onTextFieldInputChange.mock.calls.length).toBe(0);
        titleField.simulate('change');
        expect(actions.onTextFieldInputChange.mock.calls.length).toBe(1);
        contentField.simulate('change');
        expect(actions.onTextFieldInputChange.mock.calls.length).toBe(2);
    });
});

