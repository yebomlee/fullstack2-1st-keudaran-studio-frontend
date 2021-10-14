import React from 'react';
import SignInBox from './SignInBox';
import './SignIn.scss';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      tempUserData: { username: '', password: '' },
    };
  }

  saveInputChange = e => {
    const { name, value } = e.target;
    const { username, password } = this.state.tempUserData;
    this.setState({ tempUserData: { username, password, [name]: value } });
  };

  checkInputFilled = () => {
    const { tempUserData } = this.state;
    if (tempUserData.username && tempUserData.password) {
      return true;
    } else return false;
  };

  login = e => {
    const { changeLoginState } = this.props;
    e.preventDefault();
    const { tempUserData } = this.state;
    fetch('/user/signin', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: tempUserData.username,
        password: tempUserData.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SIGN_IN_SUCCESS') {
          changeLoginState();
          this.props.history.push('/');
        } else {
          alert('아이디 혹은 비밀번호가 틀렸습니다.');
        }
      })
      .catch(e => console.log(e));
  };

  render() {
    const { userData, tempUserData } = this.state;

    return (
      <div className="SignIn">
        <SignInBox
          userData={userData}
          tempUserData={tempUserData}
          saveInputChange={this.saveInputChange}
          login={this.login}
          checkInputFilled={this.checkInputFilled}
        />
      </div>
    );
  }
}

export default withRouter(SignIn);
