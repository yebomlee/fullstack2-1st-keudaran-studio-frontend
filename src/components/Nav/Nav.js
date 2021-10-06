import React, { Component } from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import category from './NavData';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
  }

  // 함수 = e => {
  //   alert(1);
  //   console.log(e);
  // };

  render() {
    return (
      <div className="Nav">
        <header className="headerMenu">
          <h1 className="logo">
            <img
              // onClick={e => {
              //   this.함수(e);
              // }}
              className="logoImg"
              alt="크다란 스토어"
              src={process.env.PUBLIC_URL + '/images/kedaran.svg'}
            />
          </h1>
          <ul>
            <li>
              <a className="headerLink" href="/">
                JOIN US
              </a>
            </li>
            <li>
              <a className="headerLink" href="/">
                LOGIN
              </a>
            </li>
            <li>
              <a className="headerLink" href="/">
                ORDER
              </a>
            </li>
            <li>
              <a className="headerLink" href="/">
                MY PAGE
              </a>
            </li>
          </ul>
        </header>
        <div className="navBar">
          <div className="dropdownMenu">
            {category.map(data => {
              return (
                <div className="dropdown">
                  <button className="dropBtn">
                    {data.name}
                    <div className="dropIcon">●</div>
                  </button>
                  <div className="dropdownContent">
                    {data.subCategory.map(data => {
                      return (
                        <Link to="" className="categoryLink">
                          {data}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rightBar">
            <div className="inputDiv">
              <input
                className="inputBox"
                type="text"
                placeholder="역시 크다란 스토어!"
              />
              <FontAwesomeIcon icon={faSearch} className="search" />
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingCart" />
            <FontAwesomeIcon icon={faBars} className="bars" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
