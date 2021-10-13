import React, { Component } from 'react';
import './ProductInfoContent.scss';

class ProductInfoContent extends Component {
  render() {
    const { descriptionImageUrl } = this.props;
    return (
      <div className="ProductInfoContent">
        <img alt="대체 사진" src={descriptionImageUrl} />
      </div>
    );
  }
}

export default ProductInfoContent;
