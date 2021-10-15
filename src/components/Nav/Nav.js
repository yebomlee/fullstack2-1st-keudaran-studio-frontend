import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuListDown: false,
      category: [],
      cookie: '',
    };
  }

  scrollDownMenuList = e => {
    if (this.state.isMenuListDown) {
      this.closeMenu();
      return;
    }
    this.setState({ isMenuListDown: true });
    e.stopPropagation();
    document.addEventListener('click', this.closeMenu);
  };

  closeMenu = () => {
    this.setState({ isMenuListDown: false });
    document.removeEventListener('click', this.closeMenu);
  };

  handleRemoveCookie = () => {
    const cookie = new Cookies();
    cookie.remove('user', { path: '/' });
    this.props.changeLoginState();
  };

  componentDidMount() {
    const { changeLoginState } = this.props;
    fetch('/category', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ category: data.categories });
      });
    changeLoginState();
  }

  render() {
    const { isLogin } = this.props;
    return (
      <div className="Nav">
        <div
          className={
            this.state.isMenuListDown ? 'modalMenu menuDown' : 'modalMenu'
          }
        >
          <div className="modalDropDown">
            {this.state.category.map(mainCategory => {
              return (
                <div className="modalSubCategory" key={mainCategory.id}>
                  {mainCategory.subCategory.map(data => {
                    return (
                      <Link
                        to={{
                          pathname: '/products',
                          search: `?main=${mainCategory.id}&sub=${data.id}`,
                        }}
                        className="modalCategoryLink"
                        key={data.id}
                      >
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
              {new Cookies().get('user') ? (
                <span className="welcoming">
                  WELCOME
                  <span className="userName">
                    {'  ' + new Cookies().get('user').id + '  '}
                  </span>
                  <span className="emoji">🦖</span>
                </span>
              ) : null}

              <>
                {!isLogin ? (
                  <>
                    <Link to="/signup" className="headerLink">
                      JOIN US
                    </Link>
                    <Link to="/signin" className="headerLink">
                      LOGIN
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="" className="headerLink">
                      MODIFY
                    </Link>
                    <Link
                      to=""
                      className="headerLink"
                      onClick={this.handleRemoveCookie}
                    >
                      LOGOUT
                    </Link>
                  </>
                )}
              </>

              <Link to="" className="headerLink">
                ORDER
              </Link>
              <Link to="" className="headerLink">
                MY PAGE
              </Link>
            </ul>
          </header>
        </div>
        <nav className="navBar">
          <div className="dropdownMenu">
            {this.state.category.map(mainCategory => {
              return (
                <div className="dropdown" key={mainCategory.id}>
                  <Link
                    to={{
                      pathname: `/products`,
                      search: `?main=${mainCategory.id}`,
                    }}
                    key={mainCategory.id}
                  >
                    <button className="dropBtn">
                      {mainCategory.name}
                      <div className="dropIcon">●</div>
                    </button>
                  </Link>
                  <div
                    className={
                      this.state.isMenuListDown
                        ? 'hiddenDropdownContent'
                        : 'dropdownContent'
                    }
                  >
                    {mainCategory.subCategory.map(subCategoryData => {
                      return (
                        <Link
                          to={{
                            pathname: `/products`,
                            search: `?main=${mainCategory.id}&sub=${subCategoryData.id}`,
                          }}
                          className="categoryLink"
                          key={subCategoryData.id}
                        >
                          {subCategoryData.name}
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
