import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './ShareKakaoLink.scss';

class ShareKakaoLink extends Component {
  render() {
    const { isSharedLinkMenu, changeStateEventShow } = this.props;
    return (
      <div className="ShareLink">
        <FontAwesomeIcon
          className="shareLinkIcon"
          icon={faShareAlt}
          onMouseEnter={() => changeStateEventShow('share')}
        />
        {isSharedLinkMenu && (
          <ul className="shareMenuBox">
            <li
              className="shareMenuButton"
              onMouseLeave={() => changeStateEventShow('share')}
              onClick={() => alert('준비중입니다')}
            >
              카카오버튼
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default ShareKakaoLink;
