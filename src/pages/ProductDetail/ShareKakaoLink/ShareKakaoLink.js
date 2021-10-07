import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './ShareKakaoLink.scss';

class ShareKakaoLink extends Component {
  render() {
    const { isSharedLinkMenu, showSharedLinkMenu } = this.props;
    return (
      <div className="ShareKakaoLink">
        <FontAwesomeIcon
          className="shareLinkIcon"
          icon={faShareAlt}
          onClick={showSharedLinkMenu}
        />
        {isSharedLinkMenu && (
          <ul className="hambergerMenuButton">
            <li className="menuButton">카카오버튼</li>
          </ul>
        )}
      </div>
    );
  }
}

export default ShareKakaoLink;
