import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
  }

  toggleImgHover = () => {
    const { isHover } = this.state;
    this.setState({
      isHover: !isHover,
    });
  };

  addComma = price => {
    const commaPrice = (price + '')
      .split('')
      .reverse()
      .map((num, i) => {
        return i % 3 === 2 ? ',' + num : num;
      })
      .reverse()
      .join('');
    return commaPrice.charAt(0) === ',' ? commaPrice.slice(1) : commaPrice;
  };

  render() {
    const { isHover } = this.state;
    const { id, name, price, imgUrl } = this.props.product;
    return (
      <li
        className="ProductCard"
        onMouseOver={this.toggleImgHover}
        onMouseOut={this.toggleImgHover}
      >
        <Link to={`/products/${id}`}>
          <img
            className="productImg"
            src={isHover ? imgUrl[1] : imgUrl[0]}
            alt={name}
          />
        </Link>
        <span className="productName">{name}</span>
        <div className="productPrice">
          <span className="price">{this.addComma(price)}</span>
          <span className="priceUnit">원</span>
        </div>
      </li>
    );
  }
}

export default ProductCard;
