import React from 'react';

class SignUpBox extends React.Component {
  render() {
    return (
      <section className="SignUpBox">
        <h1>회원정보 입력</h1>
        <div className="signUpBoxInner">
          <form className="signUpForm">
            <ul className="userInfo">
              <li>
                <input type="text" name="realName" className="realNameInput" />
              </li>
              <li>
                <input type="text" name="username" className="usernameInput" />
              </li>
              <li>
                <input
                  type="password"
                  name="password"
                  className="passwordInput"
                />
              </li>
              <li>
                <input type="password" className="passwordConfirm" />
              </li>
              <li>
                <input type="text" name="email" className="emailInput" />
              </li>
              <li>
                <input type="text" name="phoneNumber" className="phoneInput" />
              </li>
            </ul>
            <div className="joinMsg">
              <input type="checkbox" id="olderFourteenCheck" />
              <label htmlFor="olderFourteenCheck">
                14세 이상입니다. (필수)
              </label>
              <p>
                회원가입에 필요한 최소한의정보만 입력 받음으로써, 고객님의
                개인정보 수집을 최소화하고 편리한 회원가입을 제공합니다.
              </p>
            </div>
            <div className="agreeBox">
              <div className="allCheck">
                <input type="checkbox" id="allCheck" />
                <label htmlFor="allCheck">전체 동의</label>
              </div>
              <div className="detailCheck">
                <div className="legalCheck">
                  <input type="checkbox" id="usePolicyCheck" />
                  <label htmlFor="usePolicyCheck">이용약관</label>
                  <input type="checkbox" id="usePrivacyCheck" />
                  <label htmlFor="usePrivacyCheck">
                    개인정보 수집 이용 안내
                  </label>
                </div>
                <div className="marketingCheck">
                  <input type="checkbox" id="allMarketingCheck" />
                  <label htmlFor="allMarketingCheck">
                    마케팅 수신 동의(
                    <input type="checkbox" id="emailMarketingCheck" />
                    <label htmlFor="emailMarketingCheck">이메일</label>
                    <input type="checkbox" id="phoneMarketingCheck" />
                    <label htmlFor="phoneMarketingCheck">SMS</label>)
                  </label>
                  <p>
                    쇼핑몰에서 제공하는 신상품 소식/ 할인쿠폰을 무상으로
                    보내드립니다!
                  </p>
                  <p>단, 상품 구매 정보는 수신동의 여부 관계없이 발송됩니다.</p>
                  <b>
                    제공 동의를 하지 않으셔도 서비스 이용에는 문제가 없습니다.
                  </b>
                </div>
              </div>
            </div>
            <button>동의하고 가입완료</button>
          </form>
          <div className="policyWrap">
            <div className="policyBox">
              <h3>이용약관</h3>
              <textarea> -약관- </textarea>
            </div>
            <div className="usePrivacyBox">
              <h3>개인정보 수집·이용</h3>
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>목적</th>
                    <th>항목</th>
                    <th>보유기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>필수정보</th>
                    <td>회원제 서비스 이용/ 본인확인</td>
                    <td>이름, 아이디, 비밀번호, 이메일, 휴대폰</td>
                    <td>회원탈퇴 후 즉시</td>
                  </tr>
                  <tr>
                    <th>선택정보</th>
                    <td>마케팅 활용(이벤트, 맞춤형 광고)</td>
                    <td>휴대폰, 이메일</td>
                    <td>회원탈퇴 후 즉시</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="privacyNotice">
              귀하께서는 쇼핑몰에서 위와 같이 수집하는 개인정보에 대해, 동의하지
              않거나 개인정보를 기재하지 않음으로써 거부할 수 있습니다.
              <br /> 다만, 이때 회원에게 제공되는 서비스가 제한될 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUpBox;
