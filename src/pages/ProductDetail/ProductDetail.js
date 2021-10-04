import React, { Component } from 'react';
import './ProductDetail.scss';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductMiddleNav from './ProductMiddleNav/ProductMiddleNav';
import ProductContents from './ProductContents/ProductContents';
import './common.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="Detail">
        <div className="total">
          <header className="header">
            <header className="navbar">상단 top</header>
            <nav className="navbar">메뉴부분</nav>
          </header>
          <section id="product">
            <div id="main">
              <ProductPhoto></ProductPhoto>
              <ProductDescription></ProductDescription>
            </div>
            <article id="content">
              <ProductMiddleNav></ProductMiddleNav>
              <ProductContents></ProductContents>
            </article>
          </section>
          <footer id="footer">{/*예봄리~*/}하단 footer</footer>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
