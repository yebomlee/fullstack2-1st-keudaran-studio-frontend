import React from 'react';
import './SignInBox.scss';
class SignInBox extends React.Component {
  render() {
    return (
      <div className="SignInBox">
        <h1 className="signInTitle">로그인</h1>
        <div className="signInInner">
          <div className="signInFormBox">
            <h2 className="formBoxTitle">회원 로그인</h2>
            <p className="formBoxDescription">
              가인하신 아이디와 비밀번호를 입력해주세요.
              <br />
              비밀번호는 대소문자를 구분합니다.
            </p>
            <form action="./" method="POST" id="signInForm">
              <input type="text" name="username" />
              <input type="password" name="password" />
              <button>LOG-IN</button>
            </form>
          </div>
          <div className="signInFormBox">123</div>
        </div>
      </div>
    );
  }
}

export default SignInBox;
