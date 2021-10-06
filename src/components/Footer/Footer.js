import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerWrap">
          <div className="footerSubWrap">
            <ul className="footerMainList">
              <li className="title">
                <h4>회사소개</h4>
              </li>
              <li className="title">
                <h4>이용약관</h4>
              </li>
              <li className="title">
                <h4>개인정보처리방침</h4>
              </li>
              <li className="title">
                <h4>이용안내</h4>
              </li>
            </ul>

            <ul className="companyInfo">
              <li className="info">
                상호 : 주식회사 크다란<span className="verticalBar">|</span>
              </li>
              <li className="info">
                대표 : 조구만<span className="verticalBar">|</span>
              </li>
              <li className="info">개인정보보호책임자 : 조구만</li>
            </ul>
            <ul className="companyInfo">
              <li className="info">
                TEL : 00-0000-0000<span className="verticalBar">|</span>
              </li>
              <li className="info">
                EMAIL : kedaran@kedaran.com
                <span className="verticalBar">|</span>
              </li>
              <li className="info">
                입금 계좌 : [크다란] 000-0000-0000 주식회사 크다란
              </li>
            </ul>
            <ul className="companyInfo">
              <li className="info">
                사업자등록번호 : 000-00-00000
                <span className="verticalBar">|</span>
              </li>
              <li className="info">
                통신판매업신고 : 2021-대한민국서울-0000
                <span className="verticalBar">|</span>
              </li>
              <li className="info">[사업자정보확인]</li>
            </ul>
            <ul className="companyInfo">
              <li className="info">
                주소 : 서울특별시 강남구 삼성동 테헤란로 427
                <span className="verticalBar">|</span>
              </li>
              <li className="info">www.kedaranstore.com</li>
            </ul>
            <p className="copyright">
              copyrightⓒ 2021 주식회사 크다란 ALL RIGHTS RESERVED.
            </p>
          </div>
          <img
            className="logoImg"
            alt="크다란 스토어"
            src={process.env.PUBLIC_URL + '/images/kedaran2.svg'}
          />
        </div>
      </footer>
    );
  }
}
export default Footer;
