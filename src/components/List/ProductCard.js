import React from 'react';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isHover: false,
    };
  }

  setImgHover = () => {
    const { isHover } = this.state;
    this.setState({
      isHover: !isHover,
    });
  };

  goToDetail = () => {
    this.props.history.push('/product/:id');
  };

  render() {
    const { isHover } = this.state;
    return (
      <li
        className="product"
        onMouseOver={this.setImgHover}
        onMouseOut={!this.setImgHover}
      >
        <img
          onClick={this.goToDetail}
          key={this.props.id}
          src={isHover ? this.props.hoverUrl : this.props.imgUrl}
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
