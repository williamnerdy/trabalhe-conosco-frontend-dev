import axios from 'axios';

axios.defaults.baseURL = 'http://careers.picpay.com/tests/mobdev';

class PicPay {
  static getUsers() {
    const sortBy = (items = [], by) => (
      items.sort((a, b) => (
        a[by] < b[by] ? -1 : a[by] > b[by] ? 1 : 0
      ))
    );

    return axios.get('/users').then(resp => sortBy(resp.data, 'name'));
  }

  static postTransaction(data) {
    return axios.post('/transaction', data);
  }
}

export default PicPay;
