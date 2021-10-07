import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductInfo from './ProductInfo/ProductInfo';
import HambergerIcon from './HambergerIconMenu/HambergerIconMenu';
import productData from './productData.json';
import descriptionData from './descriptionData.json';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      descriptionData: [],
      imgNum: 1,
      howCount: 0,
      changeMainImg: '',
      isLikedProduct: 0,
      choiceOptionArray: [],
      isPageMenu: false,
      clickMenu: '',
    };
  }

  componentDidMount() {
    const CHANGE_IMG_INTERVER = 5000;
    this.setState({
      productData,
      descriptionData,
      changeMainImg: productData.thumbailURL,
    });
    setInterval(this.clickArrowChangeImg, CHANGE_IMG_INTERVER);
  }

  clickChangeImg = e => {
    this.setState({
      changeMainImg: e.target.currentSrc,
    });
  };

  clickArrowChangeImg = position => {
    const MAX_LIMIT_IMG_NUM = 3;
    const CHANGE_MIN_IMG_NUM = 1;
    const MIN_LIMIT_IMG_NUM = 1;
    const CHANGE_MAX_IMG_NUM = 4;
    const { imgNum } = this.state;
    let imgId = 0;
    if (position === 'right') {
      imgId = imgNum <= MIN_LIMIT_IMG_NUM ? CHANGE_MAX_IMG_NUM : imgNum - 1;
    } else {
      imgId = imgNum > MAX_LIMIT_IMG_NUM ? CHANGE_MIN_IMG_NUM : imgNum + 1;
    }
    this.findSameImg(imgId);
  };

  findSameImg = num => {
    const changeMainImg = this.state.productData.productImgs.find(
      productImg => productImg.id === num
    );
    this.setState({
      imgNum: num,
      changeMainImg: changeMainImg.imagURL,
    });
  };

  increaseCounter = option => {
    const { choiceCount, quantity } = option;
    if (choiceCount >= quantity) {
      alert('재고량을 다시 확인하세요');
      return;
    }
    option.choiceCount = choiceCount + 1;
    this.setState({
      howCount: choiceCount + 1,
    });
  };

  decreaseCounter = option => {
    const { choiceCount } = option;
    const MIN_LIMIT_OPTION_NUM = 1;
    if (choiceCount < MIN_LIMIT_OPTION_NUM) {
      alert('1개 이상 선택해야됩니다');
      return;
    }
    option.choiceCount = choiceCount - 1;
    this.setState({
      howCount: choiceCount - 1,
    });
  };

  choiceOptionChange = e => {
    const { choiceOptionArray, productData } = this.state;
    const resultOption = productData.options?.find(option => {
      return option.name === e.target.value;
    });
    if (!resultOption) return;
    const { name, quantity } = resultOption;
    const isExist = choiceOptionArray.some(option => option.name === name);
    if (isExist) return;
    this.setState({
      choiceCount: 0,
      choiceOptionArray: [
        ...choiceOptionArray,
        {
          id: choiceOptionArray.length
            ? choiceOptionArray[choiceOptionArray.length - 1].id + 1
            : 1,
          name,
          quantity,
          choiceCount: 0,
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

  deleteChoiceOption = id => {
    const choiceOptionArray = this.state.choiceOptionArray.filter(
      el => el.id !== id
    );
    this.setState({ choiceOptionArray });
  };

  changePositionScroll = whatButton => {
    const MOVE_PHOTO_POSITION = 0;
    const MOVE_INFO_POSITION = 1150;
    const MOVE_REVIEW_POSITION = 3100;
    const moveSroll = movePosition => {
      const position = { top: movePosition, left: 0, behavior: 'smooth' };
      window.scrollTo(position);
    };
    this.setState({
      clickMenu: whatButton,
    });
    if (whatButton === 'info') moveSroll(MOVE_INFO_POSITION);
    else if (whatButton === 'review') moveSroll(MOVE_REVIEW_POSITION);
    else moveSroll(MOVE_PHOTO_POSITION);
  };

  showMyPageMenu = () => {
    const { isPageMenu } = this.state;
    this.setState({
      isPageMenu: !isPageMenu,
    });
  };

  render() {
    const { id, name, price, point, productImgs, options } =
      this.state.productData;
    const { origin, brand, shippingFee } = this.state.descriptionData;
    const {
      changeMainImg,
      isLikedProduct,
      choiceOptionArray,
      isPageMenu,
      clickMenu,
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
                {...{ id, name, mainImg: changeMainImg, subImgs: productImgs }}
                clickChangeImg={this.clickChangeImg}
                clickArrowChangeImg={this.clickArrowChangeImg}
              />
              <ProductDescription
                {...{ id, name, price, point, options }}
                {...{ origin, brand, shippingFee }}
                {...{
                  isLikedProduct,
                  choiceOptionArray,
                }}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
                choiceOptionChange={this.choiceOptionChange}
                clickLikedProduct={this.clickLikedProduct}
                deleteChoiceOption={this.deleteChoiceOption}
              />
            </div>
            <article className="content">
              <ProductInfo
                {...{ clickMenu }}
                changePositionScroll={this.changePositionScroll}
              />
            </article>
          </section>
          <HambergerIcon
            {...{ isPageMenu }}
            showMyPageMenu={this.showMyPageMenu}
            changePositionScroll={this.changePositionScroll}
          ></HambergerIcon>
          <footer className="footer">하단 footer</footer>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
