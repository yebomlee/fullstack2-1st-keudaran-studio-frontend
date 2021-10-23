import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_ENDPOINT } from '../../../api';
import './SignIn.scss';

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
    fetch(`${API_ENDPOINT}/user/signin`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      credentials: 'include',
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

  goToSignUp = () => {
    this.props.history.push('/signup');
  };

  getReady = () => {
    alert('준비중입니다.');
  };

  render() {
    return (
      <section className="SignIn">
        <div className="signInInner">
          <h1 className="signInTitle">로그인</h1>
          <div className="signInInner">
            <div className="signInFormBox">
              <h2 className="formBoxTitle">회원 로그인</h2>
              <p className="formBoxDescription">
                가입하신 아이디와 비밀번호를 입력해주세요.
                <br />
                비밀번호는 대소문자를 구분합니다.
              </p>
              <form
                action="./"
                method="POST"
                className="signInForm"
                onSubmit={this.login}
              >
                <input
                  type="text"
                  name="username"
                  className="signInInput"
                  placeholder="MEMBER ID"
                  onChange={this.saveInputChange}
                />
                <input
                  type="password"
                  name="password"
                  className="signInInput"
                  placeholder="PASSWORD"
                  onChange={this.saveInputChange}
                />
                <button
                  type="submit"
                  className={
                    this.checkInputFilled()
                      ? 'signInBtnFilledStyle active'
                      : 'signInBtnFilledStyle'
                  }
                  disabled={!this.checkInputFilled()}
                >
                  LOG-IN
                </button>
              </form>
            </div>
            <div className="signInFormBox">
              <h2 className="formBoxTitle">회원가입</h2>
              <div className="buttonBox">
                <p className="formBoxDescription">
                  아직 회원이 아니신가요?
                  <br />
                  회원가입을 하시면 다양한 혜택을 편리하게 이용하실 수 있습니다.
                </p>
                <button
                  type="button"
                  className="signInBtnEmptyStyle"
                  onClick={this.goToSignUp}
                >
                  JOIN-US
                </button>
              </div>
              <div className="buttonBox">
                <p className="formBoxDescription">
                  아이디 혹은 비밀번호를 잊으셨나요?
                  <br />
                  간단한 정보를 입력 후 잃어버린 정보를 찾으실 수 있습니다.
                </p>
                <button
                  type="button"
                  className="signInBtnEmptyStyle"
                  onClick={this.getReady}
                >
                  ID/PASSWORD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SignIn);
