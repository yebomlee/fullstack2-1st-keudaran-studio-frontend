import React, { Component } from 'react';
import ProductInfoContent from './ProductInfoContent';
import ProductReview from './ProductReview';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    const { changePositionScroll } = this.props;
    return (
      <div className="ProductInfo">
        <ul className="middleMenu">
          <li
            value="asd"
            className="menuDetail"
            onClick={() => changePositionScroll('info')}
          >
            상품상세
          </li>
          <li
            className="menuReview"
            onClick={() => changePositionScroll('review')}
          >
            상품후기
          </li>
        </ul>
        <ProductInfoContent />
        <ProductReview />
      </div>
    );
  }
}

export default ProductInfo;
