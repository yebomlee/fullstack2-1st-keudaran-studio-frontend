import React from 'react';
import './SignInBox.scss';
class SignInBox extends React.Component {
  render() {
    const { saveInputChange, login, checkInputFilled, goToSignUp, getReady } =
      this.props;
    return (
      <section className="SignInBox">
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
              onSubmit={login}
            >
              <input
                type="text"
                name="username"
                className="signInInput"
                placeholder="MEMBER ID"
                onChange={saveInputChange}
              />
              <input
                type="password"
                name="password"
                className="signInInput"
                placeholder="PASSWORD"
                onChange={saveInputChange}
              />
              <button
                type="submit"
                className={
                  checkInputFilled()
                    ? 'signInBtnFilledStyle active'
                    : 'signInBtnFilledStyle'
                }
                disabled={!checkInputFilled()}
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
                onClick={goToSignUp}
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
                onClick={getReady}
              >
                ID/PASSWORD
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignInBox;
