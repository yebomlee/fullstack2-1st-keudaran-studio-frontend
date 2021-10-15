import React, { Component } from 'react';
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductInfo from './ProductInfo/ProductInfo';
import HambergerIcon from './HambergerIconMenu/HambergerIconMenu';
import './ProductDetail.scss';
import Cookies from 'universal-cookie';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      imgNum: 1,
      howCount: 0,
      changeMainImg: '',
      isLikedProduct: 0,
      choiceOptionArray: [],
      isPositionMenu: false,
      isSharedLinkMenu: false,
      clickMenu: '',
      isLogin: false,
    };
  }

  componentDidMount() {
    const CHANGE_IMG_INTERVER = 5000;
    let listId = this.props.match.params?.id;
    if (listId <= 0 || listId > 15) listId = 1;
    fetch(`/product/detail?id=${listId}`, {
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
    const changeMainImg = this.state.productData.productImage.find(
      (productImg, index) => index + 1 === num
    );
    this.setState({
      imgNum: num,
      changeMainImg: changeMainImg.imageUrl,
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
    const resultOption = productData.productOption?.find(option => {
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

  changeStateEventShow = role => {
    const { isLikedProduct, isMovePositionMenu, isSharedLinkMenu } = this.state;
    if (role === 'like') {
      this.setState({
        isLikedProduct: !isLikedProduct,
      });
    } else if (role === 'move') {
      this.setState({
        isMovePositionMenu: !isMovePositionMenu,
      });
    } else {
      this.setState({
        isSharedLinkMenu: !isSharedLinkMenu,
      });
    }
  };

  deleteChoiceOption = id => {
    const choiceOptionArray = this.state.choiceOptionArray.filter(
      el => el.id !== id
    );
    this.setState({ choiceOptionArray });
  };

  changePositionScroll = whereMovePosition => {
    const MOVE_PHOTO_POSITION = 0;
    const MOVE_INFO_POSITION = 1150;
    const MOVE_REVIEW_POSITION = 10000;
    const moveSroll = movePosition => {
      const position = { top: movePosition, left: 0, behavior: 'smooth' };
      window.scrollTo(position);
    };
    this.setState({
      clickMenu: whereMovePosition,
    });
    if (whereMovePosition === 'info') moveSroll(MOVE_INFO_POSITION);
    else if (whereMovePosition === 'review') moveSroll(MOVE_REVIEW_POSITION);
    else moveSroll(MOVE_PHOTO_POSITION);
  };

  showSharedLinkMenu = () => {
    const { isSharedLinkMenu } = this.state;
    this.setState({
      isSharedLinkMenu: !isSharedLinkMenu,
    });
  };

  addComma = price => {
    const commaPrice = (price + '')
      .split('')
      .reverse()
      .map((num, i) => {
        return i % 3 === 2 ? ',' + num : num;
      })
      .reverse()
      .join('');
    return commaPrice.charAt(0) === ',' ? commaPrice.slice(1) : commaPrice;
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
      choiceOptionArray,
      isMovePositionMenu,
      isSharedLinkMenu,
      clickMenu,
      isLogin,
    } = this.state;
    return (
      <div className="Detail">
        <div className="total">
          <section className="product">
            <div className="main">
              <ProductPhoto
                {...{ id, name, mainImg: changeMainImg, subImgs: productImage }}
                clickChangeImg={this.clickChangeImg}
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
                addComma={this.addComma}
              />
            </div>
            <article className="content">
              <ProductInfo
                descriptionImageUrl={descriptionImageUrl}
                clickMenu={clickMenu}
                changePositionScroll={this.changePositionScroll}
                id={this.props.match.params.id}
                isLogin={isLogin}
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
