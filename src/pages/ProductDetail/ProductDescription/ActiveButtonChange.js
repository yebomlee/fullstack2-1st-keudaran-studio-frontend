import React, { Component } from 'react';
import './ActiveButtonChange.scss';
import LikeButton from '../LikeButton/LikeButton';

class ActiveButtonChange extends Component {
  render() {
    const { isLikedProduct, changeStateEventShow, productTotalQuantity } =
      this.props;
    return (
      <div className="ActiveButtonChange">
        {productTotalQuantity !== 0 ? (
          <div className="activeButton">
            <p
              className="buyButton commonButton"
              onClick={() => {
                alert('준비중입니다');
              }}
            >
              구매하기
            </p>
            <p
              className="basketButton commonButton"
              onClick={() => {
                alert('준비중입니다');
              }}
            >
              장바구니
            </p>
            <LikeButton
              className="ChangeHeart"
              {...{ isLikedProduct, changeStateEventShow }}
            />
          </div>
        ) : (
          <div className="productSoldout">
            <p>Sold Out</p>
          </div>
        )}
      </div>
    );
  }
}

export default ActiveButtonChange;
