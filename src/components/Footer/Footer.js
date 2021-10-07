import React, { Component } from 'react';
import './Footer.scss';
import {
  companyInfo,
  companyInfo2,
  companyInfo3,
  companyInfo4,
} from './FooterData';

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
              {companyInfo.map(data => {
                return (
                  <li className="info">
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo2.map(data => {
                return (
                  <li className="info">
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo3.map(data => {
                return (
                  <li className="info">
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo4.map(data => {
                return (
                  <li className="info">
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
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
