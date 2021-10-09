import React, { Component } from 'react';
import ProductCard from './ProductCard';
import MainListProducts from './MainListMockData';
import './MainList.scss';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProductsData: MainListProducts,
    };
  }

  render() {
    return (
      <div className="MainList">
        <ul className="productListWraper">
          {this.state.mainProductsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainList;
