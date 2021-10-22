import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductInfo from './ProductInfo/ProductInfo';
import HambergerIcon from './HambergerIconMenu/HambergerIconMenu';
import { API_ENDPOINT } from '../../api';
import './ProductDetail.scss';
import Cookies from 'universal-cookie';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      imgNum: 1,
      changeMainImg: '',
      choiceOptionArray: [],
      isInfoColor: false,
      isReviewColor: false,
      isLikedProduct: false,
      isPositionMenu: false,
      isSharedLinkMenu: false,
      isLogin: false,
    };
    this.multiRefs = {
      topRef: React.createRef(),
      infoRef: React.createRef(),
      reviewRef: React.createRef(),
    };
  }

  componentDidMount() {
    const CHANGE_IMG_INTERVER = 5000;
    let listId = this.props.match.params?.id;
    if (listId <= 0 || listId > 15) listId = 1;
    fetch(`${API_ENDPOINT}/product/detail?id=${listId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(productData => {
        this.setState({
          productData,
          changeMainImg: productData.thumbnailUrl,
        });
      });
    setInterval(this.clickArrowChangeImg, CHANGE_IMG_INTERVER);
    this.checkLogin();
  }

  checkLogin = () => {
    if (new Cookies().get('user')) this.setState({ isLogin: true });
  };

  toggleIsLogin = () => {
    new Cookies().get('user')
      ? this.setState({ isLogin: true })
      : this.setState({ isLogin: false });
  };

  hoverChangeImg = e => {
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
    let changeImgNum = 0;
    if (position === 'right') {
      changeImgNum =
        imgNum <= MIN_LIMIT_IMG_NUM ? CHANGE_MAX_IMG_NUM : imgNum - 1;
    } else {
      changeImgNum =
        imgNum > MAX_LIMIT_IMG_NUM ? CHANGE_MIN_IMG_NUM : imgNum + 1;
    }
    this.findSameImg(changeImgNum);
  };

  findSameImg = changeImgNum => {
    const changeMainImg = this.state.productData.productImage.find(
      (productImg, index) => index + 1 === changeImgNum
    );
    this.setState({
      imgNum: changeImgNum,
      changeMainImg: changeMainImg.imageUrl,
    });
  };

  choiceOptionChange = e => {
    const { choiceOptionArray, productData } = this.state;
    const resultOption = productData.productOption.find(option => {
      return option.id === Number(e.target.value);
    });
    const { id, name, quantity } = resultOption;
    const isExist = choiceOptionArray.some(option => option.id === id);
    if (isExist) return;
    this.setState({
      choiceOptionArray: [
        ...choiceOptionArray,
        {
          id,
          name,
          quantity,
          choiceCount: 0,
        },
      ],
    });
  };

  increaseCounter = id => {
    const { choiceOptionArray } = this.state;
    const selectedIndex = choiceOptionArray.findIndex(
      option => option.id === id
    );
    const newOptions = [...choiceOptionArray];
    const selectedOption = newOptions[selectedIndex];
    if (selectedOption.choiceCount >= selectedOption.quantity) {
      alert('재고량을 다시 확인하세요');
      return;
    }
    newOptions[selectedIndex] = {
      ...selectedOption,
      choiceCount: selectedOption.choiceCount + 1,
    };
    this.setState({
      choiceOptionArray: newOptions,
    });
  };

  decreaseCounter = id => {
    const MIN_LIMIT_OPTION_NUM = 1;
    const { choiceOptionArray } = this.state;
    const selectedIndex = choiceOptionArray.findIndex(
      option => option.id === id
    );
    const newOptions = [...choiceOptionArray];
    const selectedOption = newOptions[selectedIndex];
    if (selectedOption.choiceCount < MIN_LIMIT_OPTION_NUM) {
      alert('1개 이상 선택해야됩니다');
      return;
    }
    newOptions[selectedIndex] = {
      ...selectedOption,
      choiceCount: selectedOption.choiceCount - 1,
    };
    this.setState({
      choiceOptionArray: newOptions,
    });
  };

  changeStateEventShow = role => {
    const { isLikedProduct, isMovePositionMenu, isSharedLinkMenu } = this.state;
    this.setState({
      isLikedProduct: role === 'like' && !isLikedProduct,
      isMovePositionMenu: role === 'move' && !isMovePositionMenu,
      isSharedLinkMenu: role === 'share' && !isSharedLinkMenu,
    });
  };

  deleteChoiceOption = id => {
    const choiceOptionArray = this.state.choiceOptionArray.filter(
      choiceOption => choiceOption.id !== id
    );
    this.setState({ choiceOptionArray });
  };

  changePositionScroll = whereMovePosition => {
    this.multiRefs[whereMovePosition]?.current.scrollIntoView({
      behavior: 'smooth',
    });
    this.setState({
      isInfoColor: whereMovePosition === 'infoRef',
      isReviewColor: whereMovePosition === 'reviewRef',
    });
  };

  render() {
    const {
      id,
      name,
      price,
      point,
      productImage,
      productOption,
      descriptionImageUrl,
    } = this.state.productData;
    const { origin, brand, shippingFee } = this.state.productData;
    const {
      changeMainImg,
      isLikedProduct,
      isMovePositionMenu,
      isSharedLinkMenu,
      isReviewColor,
      isInfoColor,
      choiceOptionArray,
      isLogin,
    } = this.state;
    return (
      <div className="Detail" ref={this.multiRefs.topRef}>
        <div className="total">
          <section className="product">
            <div className="main">
              <ProductPhoto
                {...{ id, name, mainImg: changeMainImg, subImgs: productImage }}
                hoverChangeImg={this.hoverChangeImg}
                clickArrowChangeImg={this.clickArrowChangeImg}
              />
              <ProductDescription
                {...{ id, name, price, point, productOption }}
                {...{ origin, brand, shippingFee }}
                {...{
                  isLikedProduct,
                  choiceOptionArray,
                  isSharedLinkMenu,
                }}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
                choiceOptionChange={this.choiceOptionChange}
                changeStateEventShow={this.changeStateEventShow}
                deleteChoiceOption={this.deleteChoiceOption}
              />
            </div>
            <article className="content">
              <ProductInfo
                id={this.props.match.params.id}
                ref={this.multiRefs}
                descriptionImageUrl={descriptionImageUrl}
                isInfoColor={isInfoColor}
                isReviewColor={isReviewColor}
                isLogin={isLogin}
                changePositionScroll={this.changePositionScroll}
                toggleIsLogin={this.toggleIsLogin}
              />
            </article>
          </section>
          <HambergerIcon
            {...{ isMovePositionMenu }}
            changeStateEventShow={this.changeStateEventShow}
            changePositionScroll={this.changePositionScroll}
          ></HambergerIcon>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
