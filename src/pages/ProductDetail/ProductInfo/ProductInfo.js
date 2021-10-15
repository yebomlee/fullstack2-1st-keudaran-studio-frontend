import React, { Component } from 'react';
import ProductInfoContent from './ProductInfoContent';
import Review from '../../../components/Review/Review';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    const {
      clickMenu,
      changePositionScroll,
      descriptionImageUrl,
      id,
      isLogin,
      toggleIsLogin,
    } = this.props;
    const whatColotMenu = menu =>
      clickMenu === menu ? 'yesChangeColor' : 'notChangeColor';
    return (
      <div className="ProductInfo">
        <ul className="middleMenu">
          <li
            className={whatColotMenu('info')}
            onClick={() => changePositionScroll('info')}
          >
            상품상세
          </li>
          <li
            className={whatColotMenu('review')}
            onClick={() => changePositionScroll('review')}
          >
            상품후기
          </li>
        </ul>
        <ProductInfoContent descriptionImageUrl={descriptionImageUrl} />
        <h1 className="reviewTitle">REVIEW</h1>
        <Review id={id} isLogin={isLogin} toggleIsLogin={toggleIsLogin} />
      </div>
    );
  }
}

export default ProductInfo;
