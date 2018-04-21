import React from 'react';
import { shallow } from 'enzyme';
import UserList from '../src/Components/UserList';

describe('<UserList />', () => {
  let dataUser;

  beforeEach(() => {
    dataUser = [
      {
        id: 1,
        img: 'foo-1.png',
        name: 'user name 1',
        username: 'username1',
      },
      {
        id: 2,
        img: 'foo-2.png',
        name: 'user name 2',
        username: 'username2',
      },
      {
        id: 3,
        img: 'foo-3.png',
        name: 'user name 3',
        username: 'username3',
      },
    ];
  });

  test('should render <User /> on component', () => {
    const wrapper = shallow(<UserList users={dataUser} />);
    expect(wrapper.find('User').length).toEqual(3);
  });
});
