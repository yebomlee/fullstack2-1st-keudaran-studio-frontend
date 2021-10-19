import React, { Component } from 'react';
import ProductCard from './MainProductCard';
import mainListProducts from './MainListMockData';
import './MainList.scss';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.mainProducts = mainListProducts;
  }

  render() {
    return (
      <div className="MainList">
        <ul className="productListWraper">
          {this.mainProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MainList;
