import React, { Component } from 'react';
import ProductInfoContent from './ProductInfoContent';
import Review from '../../../components/Review/Review';
import './ProductInfo.scss';

class ProductInfo extends Component {
  render() {
    const {
      changePositionScroll,
      descriptionImageUrl,
      id,
      isLogin,
      isReviewColor,
      isInfoColor,
      toggleIsLogin,
    } = this.props;
    return (
      <div className="ProductInfo" ref={this.props.forwardRef.infoRef}>
        <ul className="middleMenu">
          <li
            className={isInfoColor ? 'yesChangeColor' : 'notChangeColor'}
            onClick={() => changePositionScroll('infoRef')}
          >
            상품상세
          </li>
          <li
            className={isReviewColor ? 'yesChangeColor' : 'notChangeColor'}
            onClick={() => changePositionScroll('reviewRef')}
          >
            상품후기
          </li>
        </ul>
        <ProductInfoContent descriptionImageUrl={descriptionImageUrl} />
        <h1 className="reviewTitle" ref={this.props.forwardRef.reviewRef}>
          REVIEW
        </h1>
        <Review id={id} isLogin={isLogin} toggleIsLogin={toggleIsLogin} />
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <ProductInfo {...props} forwardRef={ref} />;
});
