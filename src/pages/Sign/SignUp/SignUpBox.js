import React from 'react';
import './SignUpBox.scss';

class SignUpBox extends React.Component {
  render() {
    return (
      <section className="SignUpBox">
        <h1 className="signUpTitle">회원정보 입력</h1>
        <div className="signUpBoxInner">
          <form className="signUpForm">
            <ul className="userInfo">
              <li>
                <input
                  type="text"
                  name="realName"
                  className="realNameInput userInfoInput"
                  placeholder="이름"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="username"
                  className="usernameInput userInfoInput"
                  placeholder="아이디"
                />
              </li>
              <li>
                <input
                  type="password"
                  name="password"
                  className="passwordInput userInfoInput"
                  placeholder="비밀번호"
                />
              </li>
              <li>
                <input
                  type="password"
                  className="passwordConfirm userInfoInput"
                  placeholder="비밀번호 확인"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="email"
                  className="emailInput userInfoInput"
                  placeholder="이메일"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="phoneNumber"
                  className="phoneInput userInfoInput"
                  placeholder="휴대폰 번호"
                />
              </li>
            </ul>
            <div className="joinMsg">
              <input type="checkbox" id="olderFourteenCheck" />
              <label htmlFor="olderFourteenCheck" className="mustCheckLabel">
                14세 이상입니다. (필수)
              </label>
              <p className="joinDescription">
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
                  <button class="littleGreyBtn">내용 보기</button>
                  <input type="checkbox" id="usePrivacyCheck" />
                  <label htmlFor="usePrivacyCheck">
                    개인정보 수집 이용 안내
                  </label>
                  <button class="littleGreyBtn">내용 보기</button>
                </div>
                <div className="marketingCheck">
                  <div class="checkBox">
                    <input type="checkbox" id="allMarketingCheck" />
                    <label htmlFor="allMarketingCheck">
                      마케팅 수신 동의(
                      <input type="checkbox" id="emailMarketingCheck" />
                      <label htmlFor="emailMarketingCheck">이메일</label>
                      <input type="checkbox" id="phoneMarketingCheck" />
                      <label htmlFor="phoneMarketingCheck">SMS</label>)
                    </label>
                  </div>
                  <div class="marketingParagraph">
                    <p>
                      쇼핑몰에서 제공하는 신상품 소식/ 할인쿠폰을 무상으로
                      보내드립니다!
                    </p>
                    <p>
                      단, 상품 구매 정보는 수신동의 여부 관계없이 발송됩니다.
                    </p>
                    <b>
                      제공 동의를 하지 않으셔도 서비스 이용에는 문제가 없습니다.
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="signUpBtn">
              동의하고 가입완료
            </button>
          </form>
          <div className="policyWrap">
            <div className="policyBox">
              <h3 className="policyTitle">이용약관</h3>
              <textarea className="policyText">
                인터넷 쇼핑몰 『주식회사 크다란 스튜디오 프로젝트』회원 약관
                제1조(목적) 이 약관은 주식회사 플레이윈 회사(전자상거래
                사업자)가 운영하는 주식회사 플레이윈 사이버 몰(이하 “몰”이라
                한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를
                이용함에 있어 사이버 몰과 이용자의 권리·의무 및 책임사항을
                규정함을 목적으로 합니다. ※「PC통신, 무선 등을 이용하는
                전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을
                준용합니다.」 제2조(정의) ① “몰”이란 주식회사 플레이윈 회사가
                재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기
                위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수
                있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는
                사업자의 의미로도 사용합니다. ② “이용자”란 “몰”에 접속하여 이
                약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을
                말합니다. ③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서,
                계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를
                말합니다. ④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이
                제공하는 서비스를 이용하는 자를 말합니다. 제3조 (약관 등의
                명시와 설명 및 개정) ① “몰”은 이 약관의 내용과 상호 및 대표자
                성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의
                주소를 포함), 전화번호·모사전송번호·전자우편주소,
              </textarea>
            </div>
            <div className="usePrivacyBox ">
              <h3 className="policyTitle">개인정보 수집·이용</h3>
              <table className="privacyTable">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="privacyTableHead">
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
