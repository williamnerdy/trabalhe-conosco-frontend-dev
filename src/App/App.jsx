import React, { Component } from 'react';
import PicPay from '../Models/PicPay';
import Header from '../Components/Header';
import UserList from '../Components/UserList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: 'Front-End Test',
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    PicPay.getUsers()
      .then(users => {
        this.setState({ users });
      })
      .catch(err => {
        alert('Falha ao receber os dados!');
        console.error(err);
      });
  }

  render() {
    return (
      <div className="app">
        <Header title={this.state.header} />
        <main className="content" role="main">
          <div className="container">
            <UserList users={this.state.users} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
