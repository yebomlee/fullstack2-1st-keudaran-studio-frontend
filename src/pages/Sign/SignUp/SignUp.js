import React from 'react';
import SignUpBox from './SignUpBox';
import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        <SignUpBox />
      </div>
    );
  }
}

export default SignUp;
