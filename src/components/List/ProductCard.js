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

  render() {
    const { isHover } = this.state;
    const { id, name, price, hoverImgUrl, imgUrl } = this.props;
    return (
      <li
        className="ProductCard"
        onMouseOver={this.toggleImgHover}
        onMouseOut={this.toggleImgHover}
      >
        <Link
          to={{
            pathname: `/products/${id}`,
          }}
        >
          <img
            className="productListImages"
            src={isHover ? hoverImgUrl : imgUrl}
            alt={name}
          />
        </Link>
        <span className="productName">{name}</span>
        <div className="productPrice">
          <span>{price}</span>
          <span>원</span>
        </div>
      </li>
    );
  }
}

export default ProductCard;
