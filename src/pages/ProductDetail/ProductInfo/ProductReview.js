import React, { Component } from 'react';
import './ProductReview.scss';

class ProductReview extends Component {
  render() {
    return (
      <div className="ProductReview">
        <strong className="reviewTitle">상품 후기</strong>
        <img
          alt="대체 사진"
          src="https://www.jogumanstore.com/shopimages/playwin/0060060000012.jpg?1625563215"
        />
      </div>
    );
  }
}

export default ProductReview;
