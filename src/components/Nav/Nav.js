import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { headerMenu } from './NavData';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuListDown: false,
      category: [],
    };
  }

  scrollDownMenuList = () => {
    this.setState({ isMenuListDown: !this.state.isMenuListDown });
  };

  componentDidMount() {
    fetch('/data/navCategory.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ category: data.CATEGORY });
      });
  }

  render() {
    return (
      <div className="Nav">
        <div
          className={
            this.state.isMenuListDown ? 'modalMenu menuDown' : 'modalMenu'
          }
        >
          <div className="modalDropDown">
            {this.state.category.map(data => {
              return (
                <div className="modalSubCategory">
                  {data.subCategory.map(data => {
                    return (
                      <Link to="{}" className="modalCategoryLink">
                        {data.name}
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
              {headerMenu.map(data => {
                return (
                  <Link to="{}" className="headerLink">
                    {data.name}
                  </Link>
                );
              })}
            </ul>
          </header>
        </div>
        <nav className="navBar">
          <div className="dropdownMenu">
            {this.state.category.map(data => {
              return (
                <div className="dropdown">
                  <button className="dropBtn">
                    {data.name}
                    <div className="dropIcon">●</div>
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
                          {data.name}
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
