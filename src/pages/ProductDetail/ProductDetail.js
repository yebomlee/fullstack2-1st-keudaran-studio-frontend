import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductMiddleNav from './ProductMiddleNav/ProductMiddleNav';
import ProductContents from './ProductContents/ProductContents';
import serverData from './serverData.json';
import mokeData from './mokeData.json';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      serverData: [],
      mokeData: [],
      imgNum: 1,
      choiceCount: 0,
      changeMainImg: '',
      isLikedProduct: 0,
      choiceOptionArray: [],
    };
  }

  componentDidMount() {
    const CHANGE_IMG_INTERVER = 5000;
    this.setState({
      serverData,
      mokeData,
      changeMainImg: serverData.thumbailURL,
    });
    setInterval(this.clickLeftChangeImg, CHANGE_IMG_INTERVER);
  }

  clickChangeImg = e => {
    this.setState({
      changeMainImg: e.target.currentSrc,
    });
  };

  clickLeftChangeImg = () => {
    const MAX_LIMIT_IMG_NUM = 3;
    const CHANGE_IMG_NUM = 1;
    const { imgNum } = this.state;
    let imgId = 0;
    imgId = imgNum > MAX_LIMIT_IMG_NUM ? CHANGE_IMG_NUM : imgNum + 1;
    this.findSameImg(imgId);
  };

  clickRightChangeImg = () => {
    const MIN_LIMIT_IMG_NUM = 1;
    const CHANGE_IMG_NUM = 4;
    const { imgNum } = this.state;
    let imgId = 0;
    imgId = imgNum <= MIN_LIMIT_IMG_NUM ? CHANGE_IMG_NUM : imgNum - 1;
    this.findSameImg(imgId);
  };

  findSameImg = num => {
    const changeMainImg = this.state.serverData.productImgs.find(
      productImg => productImg.id === num
    );
    this.setState({
      imgNum: num,
      changeMainImg: changeMainImg.imagURL,
    });
  };

  increaseCounter = option => {
    const { choiceCount } = this.state;
    if (choiceCount >= option.quantity) {
      alert('제고량을 다시 확인하세요');
      return;
    }
    this.setState({
      choiceCount: choiceCount + 1,
    });
  };

  decreaseCounter = () => {
    const { choiceCount } = this.state;
    const MIN_LIMIT_OPTION_NUM = 1;
    if (choiceCount < MIN_LIMIT_OPTION_NUM) {
      alert('1개 이상 선택해야됩니다');
      return;
    }
    this.setState({
      choiceCount: choiceCount - 1,
    });
  };

  choiceOptionChange = e => {
    const { choiceOptionArray, choiceCount, serverData } = this.state;
    const choiceOption = serverData.options?.find(el => {
      return el.name === e.target.value;
    });
    if (!choiceOption) return;
    const { id, name, quantity } = choiceOption;
    const isExist = choiceOptionArray.some(el => el.name === name);
    if (isExist) return;
    this.setState({
      choiceCount: 0,
      choiceOptionArray: [
        ...choiceOptionArray,
        {
          id,
          name,
          quantity,
          choiceCount,
        },
      ],
    });
  };

  clickLikedProduct = () => {
    const { isLikedProduct } = this.state;
    this.setState({
      isLikedProduct: !isLikedProduct,
    });
  };

  render() {
    const { id, name, price, point, productImgs, options } =
      this.state.serverData;
    const { origin, brand, shippingFee } = this.state.mokeData;
    const { choiceCount, changeMainImg, isLikedProduct, choiceOptionArray } =
      this.state;
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
                {...{ id, name, mainImg: changeMainImg, subImgs: productImgs }}
                clickChangeImg={this.clickChangeImg}
                clickLeftChangeImg={this.clickLeftChangeImg}
                clickRightChangeImg={this.clickRightChangeImg}
              />
              <ProductDescription
                {...{ id, name, price, point, options }}
                {...{ origin, brand, shippingFee }}
                {...{ choiceCount, isLikedProduct, choiceOptionArray }}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
                choiceOptionChange={this.choiceOptionChange}
                clickLikedProduct={this.clickLikedProduct}
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
