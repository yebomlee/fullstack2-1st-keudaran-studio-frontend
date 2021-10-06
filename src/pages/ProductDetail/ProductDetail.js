import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductMiddleNav from './ProductMiddleNav/ProductMiddleNav';
import ProductContents from './ProductContents/ProductContents';
import ProductData from './data.json';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      productImg: [],
      thumbailURL: '',
      imgNum: 1,
    };
  }

  componentDidMount() {
    const { id, name, productImg, thumbailURL } = ProductData;
    this.setState({
      id,
      name,
      productImg,
      thumbailURL,
    });
    setInterval(this.imgChangeLeft, 5000);
  }

  clickImgChang = e => {
    this.setState({
      thumbailURL: e.target.currentSrc,
    });
  };

  imgChangeLeft = () => {
    const { imgNum } = this.state;
    let imgId = 0;
    imgId = imgNum > 3 ? 1 : imgNum + 1;
    this.findSameImge(imgId);
  };

  imgChangeRight = () => {
    const { imgNum } = this.state;
    let imgId = 0;
    imgId = imgNum <= 1 ? 4 : imgNum - 1;
    this.findSameImge(imgId);
  };

  findSameImge = num => {
    const cmntList = this.state.productImg.find(el => el.id === num);
    this.setState({
      imgNum: num,
      thumbailURL: cmntList.imagURL,
    });
  };

  render() {
    const { thumbailURL, id, name, productImg } = this.state;
    return (
      <div className="Detail">
        <div className="total">
          <header className="header">
            <header className="navbar">상단 top</header>
            <nav className="navbar">메뉴부분</nav>
          </header>
          <section className="product">
            <div className="main">
              <ProductPhoto
                productId={id}
                name={name}
                mainImg={thumbailURL}
                subImg={productImg}
                clickImgChang={this.clickImgChang}
                imgChangeLeft={this.imgChangeLeft}
                imgChangeRight={this.imgChangeRight}
              />
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
