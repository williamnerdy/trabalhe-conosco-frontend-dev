import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import App from '../src/App/App';

jest.mock('axios');

describe('<App />', () => {
  it('should call axios', () => {
    const resp = { data: [] };
    axios.get.mockImplementation(() => Promise.resolve([resp]))
    mount(<App />);
    expect(axios.get.mock.calls.length).toEqual(1);
  });
});
