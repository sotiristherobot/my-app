import React from 'react';
import { mount } from 'enzyme';

import ListItem from './ListItem';

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

describe('<ListItem/>', () => {
    let {actions} = setup();
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

    it('sets the props correctly on text fields', () => {
        const titleField = wrapper.find('input[name="title"]'),
            contentField = wrapper.find('input[name="content"]');

        expect(titleField.instance().value).toBe('title');
        expect(contentField.instance().value).toBe('content');

        wrapper.setProps({ title: 'bar', content: 'foo' });

        expect(titleField.instance().value).toBe('bar');
        expect(contentField.instance().value).toBe('foo');
    });


});

