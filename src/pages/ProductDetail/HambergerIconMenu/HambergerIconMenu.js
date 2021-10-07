import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import './HambergerIconMenu.scss';

class HambergerIconMenu extends Component {
  render() {
    const { isPageMenu, showMyPageMenu, changePositionScroll } = this.props;
    return (
      <div className="HambergerIconMenu">
        <FontAwesomeIcon
          className="hambergerIcon"
          icon={faHamburger}
          onClick={showMyPageMenu}
        />
        {isPageMenu && (
          <ul className="hambergerMenuButton">
            <li
              className="menuButton"
              onClick={() => changePositionScroll('photo')}
            >
              제품정보
            </li>
            <li
              className="menuButton"
              onClick={() => changePositionScroll('info')}
            >
              상품 상세
            </li>
            <li
              className="menuButton"
              onClick={() => changePositionScroll('review')}
            >
              후기
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default HambergerIconMenu;
