import React from 'react';
import SignInBox from './SignInBox';
import './SignIn.scss';

class SignIn extends React.Component {
  render() {
    return (
      <div className="SignIn">
        <SignInBox />
      </div>
    );
  }
}

export default SignIn;
