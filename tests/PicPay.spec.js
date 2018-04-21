import axios from 'axios';
import PicPay from '../src/Models/PicPay';

jest.mock('axios');

describe('<PicPay />', () => {
  test('should fetch PicPay', () => {
    const resp = { data: [{ name: 'Bob' }] };
    axios.get.mockImplementation(() => Promise.resolve(resp))

    return PicPay.getUsers().then(users => (
      expect(users).toEqual(resp.data)
    ));
  });
});
