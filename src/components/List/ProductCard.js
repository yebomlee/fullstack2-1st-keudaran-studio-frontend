import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  goToDetail = () => {
    console.log('click');
  };

  render() {
    return (
      <li className="product">
        <img
          onClick={this.goToDetail}
          src="https://www.jogumanstore.com/shopimages/playwin/0050010000012.jpg?1604394671"
          alt="airpadsCase"
        />
        <span className="productName">UBHC 에어팟 하드케이스</span>
        <div className="productPrice">
          <span>14,000</span>
          <span>원</span>
        </div>
      </li>
    );
  }
}

export default ProductCard;
