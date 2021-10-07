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
        isAgreedServicePolicy: false,
        isAgreedCollectPrivate: false,
        isAgreedPhoneMarketing: false,
        isAgreedEmailMarketing: false,
      },
    };
  }

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
    const { checked } = e.currentTarget;
    this.setState({
      userAgreeData: {
        isAgreedServicePolicy: checked,
        isAgreedCollectPrivate: checked,
        isAgreedPhoneMarketing: checked,
        isAgreedEmailMarketing: checked,
      },
    });
  };

  render() {
    const { userAgreeData } = this.state;
    return (
      <div className="SignUp">
        <SignUpBox
          userAgreeData={userAgreeData}
          changeCheck={this.changeCheck}
          changeMarketingCheckAll={this.changeMarketingCheckAll}
          changeCheckAll={this.changeCheckAll}
        />
      </div>
    );
  }
}

export default SignUp;
