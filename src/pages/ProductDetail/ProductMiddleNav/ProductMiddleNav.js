import React, { Component } from 'react';
import './ProductMiddleNav.scss';

class ProductMiddleNav extends Component {
  render() {
    return (
      <ul id="ProductMiddleNav">
        <li className="menuDetail">상품상세</li>
        <li className="menuReview">상품후기</li>
      </ul>
    );
  }
}

export default ProductMiddleNav;
