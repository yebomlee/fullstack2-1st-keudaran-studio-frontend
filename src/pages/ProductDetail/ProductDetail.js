import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductMiddleNav from './ProductMiddleNav/ProductMiddleNav';
import ProductContents from './ProductContents/ProductContents';
import fetchData from './fetchData.json';
import mokData from './mokData.json';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      point: '',
      price: 0,
      thumbailURL: '',
      origin: '',
      brand: '',
      shippingFee: '',
      productImg: [],
      option: [],
      imgNum: 1,
      userCount: 0,
      choiceOption: [],
      totalPrice: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  componentDidMount() {
    const { id, name, price, point, productImg, thumbailURL, option } =
      fetchData;
    const { origin, brand, shippingFee } = mokData;
    this.setState({
      id,
      name,
      point,
      price,
      thumbailURL,
      origin,
      brand,
      shippingFee,
      productImg,
      option,
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

  incrementCounter() {
    let { userCount, choiceOption } = this.state;
    if (userCount >= choiceOption.quantity) {
      alert('제고량을 다시 확인하세요');
      return;
    }
    this.setState({
      userCount: userCount + 1,
    });
  }

  decrementCounter() {
    let { userCount } = this.state;
    if (userCount < 1) {
      alert('1개 이상 선택해야됩니다');
      return;
    }
    this.setState({
      userCount: userCount - 1,
    });
  }

  selectBoxChange = e => {
    const choiceOption = this.state.option.find(el => {
      return String(el.id) === e.target.value;
    });
    this.setState({
      choiceOption,
    });
  };

  render() {
    const {
      id,
      name,
      userCount,
      price,
      point,
      thumbailURL,
      origin,
      brand,
      shippingFee,
      productImg,
      option,
      choiceOption,
    } = this.state;
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
              <ProductDescription
                productId={id}
                name={name}
                userCount={userCount}
                price={price}
                point={point}
                origin={origin}
                brand={brand}
                shippingFee={shippingFee}
                option={option}
                choiceOption={choiceOption}
                incrementCounter={this.incrementCounter}
                decrementCounter={this.decrementCounter}
                selectBoxChange={this.selectBoxChange}
              />
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
