import React from 'react';
import { shallow } from 'enzyme';
import User from '../src/Components/User';

describe('<User />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <User
        id={1}
        name="User name"
        image="image.png"
        username="@username"
      />
    );
  });

  test('should get correct image src', () => {
    expect(wrapper.find('img[src="image.png"]')).toHaveLength(1);
  });

  test('should get correct user name', () => {
    expect(wrapper.find('.user-name').text()).toEqual('User name');
  });

  test('should get correct username', () => {
    const userAccount = wrapper.find('.user-account');
    expect(userAccount.contains(<span>@username</span>)).toEqual(true);
  });

  test('should get correct id', () => {
    const userAccount = wrapper.find('.user-account');
    expect(userAccount.contains(<span>id: 1</span>)).toEqual(true);
  });
});
