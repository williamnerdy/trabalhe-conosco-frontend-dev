import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/Components/Header';

describe('<Header />', () => {
  test('should get correct text', () => {
    const wrapper = shallow(<Header title="Foo" />);
    expect(wrapper.text()).toEqual('Foo');
  });
});
