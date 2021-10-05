import React, { Component } from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="headerMenu">
          <h1 className="logo">
            <img
              className="logoImg"
              alt="크다란 스토어"
              src={process.env.PUBLIC_URL + '/images/kedaran2.svg'}
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
            <div className="dropdown">
              <button className="dropBtn">All</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">All</a>
                <a href="/">New</a>
                <a href="/">Best</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropBtn">Stationery</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">Postcard</a>
                <a href="/">Notebook</a>
                <a href="/">Memopad</a>
                <a href="/">Poster</a>
                <a href="/">Tape</a>
                <a href="/">Tattoo sticker</a>
                <a href="/">Sticker</a>
                <a href="/">Diary</a>
                <a href="/">Calendar</a>
                <a href="/">Etc</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropBtn">Digital</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">AirPods Case</a>
                <a href="/">AirPods Pro Case</a>
                <a href="/">Griptok</a>
                <a href="/">Phone Case</a>
                <a href="/">Etc</a>
                <a href="/">Case/Pouch</a>
                <a href="/">BudsCase</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropBtn">Fabric & Living</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">Cup</a>
                <a href="/">Fabric</a>
                <a href="/">Pouch</a>
                <a href="/">Bag</a>
                <a href="/">Fashion</a>
                <a href="/">Pet</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropBtn">ACC</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">Key Ring</a>
                <a href="/">Pin Button</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="dropBtn">EVENT</button>
              <div className="dropdownContent">
                <i>●</i>
                <a href="/">All</a>
              </div>
            </div>
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
      // </div>
    );
  }
}

export default Nav;
