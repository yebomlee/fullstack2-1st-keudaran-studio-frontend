import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './LikeButton.scss';

class LikeButton extends Component {
  render() {
    const { isLikedProduct, clickLikedProduct } = this.props;
    return (
      <div className="LikeButton">
        <FontAwesomeIcon
          className={isLikedProduct ? 'likeButton changeColor' : 'likeButton'}
          icon={faHeart}
          onClick={clickLikedProduct}
        />
      </div>
    );
  }
}

export default LikeButton;
