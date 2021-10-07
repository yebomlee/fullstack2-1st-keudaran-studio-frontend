import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import category from './NavData';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuListDown: false,
    };
  }

  scrollDownMenuList = () => {
    this.setState({ isMenuListDown: !this.state.isMenuListDown });
  };

  render() {
    return (
      <div className="Nav">
        <div
          className={
            this.state.isMenuListDown ? 'modalMenu menuDown' : 'modalMenu'
          }
        >
          <div className="modalDropDown">
            {category.map(data => {
              return (
                <div className="modalSubCategory">
                  {data.subCategory.map(data => {
                    return (
                      <Link to="{}" className="modalCategoryLink">
                        {data}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="emptyBackgroundBox">
          <header className="headerMenu">
            <h1 className="logo">
              <Link to="/">
                <img
                  className="logoImg"
                  alt="크다란 스토어"
                  src={process.env.PUBLIC_URL + '/images/kedaran.svg'}
                />
              </Link>
            </h1>
            <ul className="headerListWrapper">
              <li className="headerList">
                <Link to="/signin" className="headerLink">
                  JOIN US
                </Link>
              </li>
              <li className="headerList">
                <Link to="/signup" className="headerLink">
                  LOGIN
                </Link>
              </li>
              <li className="headerList">
                <Link to="" className="headerLink">
                  ORDER
                </Link>
              </li>
              <li className="headerList">
                <Link to="" className="headerLink">
                  MY PAGE
                </Link>
              </li>
            </ul>
          </header>
        </div>
        <nav className="navBar">
          <div className="dropdownMenu">
            {category.map(data => {
              return (
                <div className="dropdown">
                  <button className="dropBtn">
                    {data.name}
                    <div
                      className="dropIcon"
                      // {
                      //   this.state.isMenuListDown ? 'ddddd' : 'dropIcon'
                      // }
                    >
                      {/* {`dropIcon ${this.state.isMenuListDowFn ? 'gojeong' : 'move'}`} */}
                      ●
                    </div>
                  </button>
                  <div
                    className={
                      this.state.isMenuListDown
                        ? 'hiddenDropdownContent'
                        : 'dropdownContent'
                    }
                  >
                    {data.subCategory.map(data => {
                      return (
                        <Link to="{}" className="categoryLink">
                          {data}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="searchBar">
            <div className="inputDiv">
              <input
                className="inputBox"
                type="text"
                placeholder="역시 크다란 스토어!"
              />
              <FontAwesomeIcon icon={faSearch} className="search" />
            </div>
            <FontAwesomeIcon icon={faShoppingCart} className="shoppingCart" />
            <FontAwesomeIcon
              icon={faBars}
              className="bars"
              onClick={this.scrollDownMenuList}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
