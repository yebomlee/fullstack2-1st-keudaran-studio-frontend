import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import './HambergerIconMenu.scss';

class HambergerIconMenu extends Component {
  render() {
    const { isMovePositionMenu, changeStateEventShow, changePositionScroll } =
      this.props;
    return (
      <div className="HambergerIconMenu">
        <FontAwesomeIcon
          className="hambergerIcon"
          icon={faHamburger}
          onMouseEnter={() => changeStateEventShow('move')}
        />
        {isMovePositionMenu && (
          <ul
            className="hambergerMenuBox"
            onMouseLeave={() => changeStateEventShow('move')}
          >
            <li
              className="menuButton"
              onClick={() => changePositionScroll('photo')}
            >
              제품정보
            </li>
            <li
              className="menuButton"
              onClick={() => changePositionScroll('infoRef')}
            >
              상품 상세
            </li>
            <li
              className="menuButton"
              onClick={() => changePositionScroll('reviewRef')}
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
