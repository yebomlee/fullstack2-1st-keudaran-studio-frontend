import React from 'react';
import { Link } from 'react-router-dom';
import './MainProductCard.scss';

class MainProductCard extends React.Component {
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
    const { id, name, price, imgUrl } = this.props.product;
    return (
      <li
        className="MainProductCard"
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
          <span className="price">{price.toLocaleString('en')}</span>
          <span className="priceUnit">원</span>
        </div>
      </li>
    );
  }
}

export default MainProductCard;
