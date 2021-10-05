import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductMiddleNav from './ProductMiddleNav/ProductMiddleNav';
import ProductContents from './ProductContents/ProductContents';
import './ProductDetail.scss';
import './common.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div id="Detail">
        <div className="total">
          <header className="header">
            <header className="navbar">상단 top</header>
            <nav className="navbar">메뉴부분</nav>
          </header>
          <section className="product">
            <div className="main">
              <ProductPhoto />
              <ProductDescription />
            </div>
            <article className="content">
              <ProductMiddleNav />
              <ProductContents />
            </article>
          </section>
          <footer className="footer">하단 footer</footer>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
