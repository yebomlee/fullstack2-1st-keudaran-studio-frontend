import React, { Component } from 'react';
import {
  footerMenu,
  companyInfo,
  companyInfo2,
  companyInfo3,
  companyInfo4,
} from './FooterMockData';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerWrapper">
          <div className="footerSubWrapper">
            <ul className="footerMainList">
              {footerMenu.map(data => {
                return (
                  <li className="title" key={data.id}>
                    <h4>{data.name}</h4>
                  </li>
                );
              })}
            </ul>

            <ul className="companyInfo">
              {companyInfo.map(data => {
                return (
                  <li className="info" key={data.id}>
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo2.map(data => {
                return (
                  <li className="info" key={data.id}>
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo3.map(data => {
                return (
                  <li className="info" key={data.id}>
                    {data.content}
                    <span className="verticalBar">|</span>
                  </li>
                );
              })}
            </ul>
            <ul className="companyInfo">
              {companyInfo4.map(data => {
                return (
                  <li className="info" key={data.id}>
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
