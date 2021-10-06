import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  goToDetail = () => {
    console.log('click');
    this.props.history.push('/product/:id');
  };

  render() {
    return (
      <li className="product">
        <img
          onClick={this.goToDetail}
          key={this.props.id}
          src={this.props.imgUrl}
          alt={this.props.name}
        />
        <span className="productName">{this.props.name}</span>
        <div className="productPrice">
          <span>{this.props.price}</span>
          <span>원</span>
        </div>
      </li>
    );
  }
}

export default ProductCard;
