import React from 'react';
import SignUpBox from './SignUpBox';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfoData: {
        realName: '',
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        phoneNumber: '',
      },
      userAgreeData: {
        isAgreedAge: false,
        isAgreedServicePolicy: false,
        isAgreedCollectPrivate: false,
        isAgreedPhoneMarketing: false,
        isAgreedEmailMarketing: false,
      },
    };
  }

  saveInputChange = e => {
    const { name, value } = e.currentTarget;
    const { userInfoData } = this.state;
    this.setState({ userInfoData: { ...userInfoData, [name]: value } });
  };

  changeCheck = e => {
    const { userAgreeData } = this.state;
    const { name, checked } = e.currentTarget;
    this.setState({ userAgreeData: { ...userAgreeData, [name]: checked } });
  };

  changeMarketingCheckAll = e => {
    const { userAgreeData } = this.state;
    const { checked } = e.currentTarget;
    this.setState({
      userAgreeData: {
        ...userAgreeData,
        isAgreedPhoneMarketing: checked,
        isAgreedEmailMarketing: checked,
      },
    });
  };

  changeCheckAll = e => {
    const { userAgreeData } = this.state;
    const { checked } = e.currentTarget;
    this.setState({
      userAgreeData: {
        ...userAgreeData,
        isAgreedServicePolicy: checked,
        isAgreedCollectPrivate: checked,
        isAgreedPhoneMarketing: checked,
        isAgreedEmailMarketing: checked,
      },
    });
  };

  submitUserData = e => {
    e.preventDefault();
    const {
      realName,
      username,
      password,
      passwordConfirm,
      email,
      phoneNumber,
    } = this.state.userInfoData;
    const {
      isAgreedAge,
      isAgreedServicePolicy,
      isAgreedCollectPrivate,
      isAgreedPhoneMarketing,
      isAgreedEmailMarketing,
    } = this.state.userAgreeData;

    if (!isAgreedAge || !isAgreedServicePolicy || !isAgreedCollectPrivate)
      return alert('필수 약관에 동의해 주세요.');
    else if (
      !realName ||
      !username ||
      !password ||
      !passwordConfirm ||
      !email ||
      !phoneNumber
    )
      return alert('빈칸을 모두 채워주세요!');
    else if (password !== passwordConfirm)
      return alert('비밀번호 확인과 비밀번호가 일치하지 않습니다.');
    else if (/\W/.exec(username))
      return alert('아이디에 특수문자는 들어갈 수 없습니다.');
    else if (
      !/[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.exec(
        email
      )
    )
      return alert('이메일 형식을 지켜주세요.');
    else if (!/^\d{9,11}/.exec(phoneNumber))
      return alert('핸드폰 번호는 숫자만 정확히 입력해주세요');
    else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.exec(password))
      return alert('비밀번호는 8자 이상의 숫자와 문자가 들어가야 합니다.');

    fetch('/user/signUp', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        realName,
        username,
        password,
        passwordConfirm,
        email,
        phoneNumber,
        isAgreedServicePolicy,
        isAgreedCollectPrivate,
        isAgreedPhoneMarketing,
        isAgreedEmailMarketing,
      }),
    })
      .then(res => res.json())
      .then(res => {
        alert('회원가입 성공!');
        this.props.history.push('/');
      })
      .catch(e => console.log(e));
  };

  render() {
    const { userAgreeData } = this.state;
    return (
      <div className="SignUp">
        <SignUpBox
          userAgreeData={userAgreeData}
          saveInputChange={this.saveInputChange}
          changeCheck={this.changeCheck}
          changeMarketingCheckAll={this.changeMarketingCheckAll}
          changeCheckAll={this.changeCheckAll}
          submitUserData={this.submitUserData}
        />
      </div>
    );
  }
}

export default SignUp;
