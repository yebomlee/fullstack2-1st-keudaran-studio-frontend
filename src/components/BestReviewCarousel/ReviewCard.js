import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ReviewCard.scss';

class ReviewCard extends Component {
  render() {
    const {
      reviewimgUrl,
      text,
      rate,
      userId,
      productImgUrl,
      productName,
      porductId,
    } = this.props.review;
    return (
      <div className="ReviewCard">
        <div className="reviewWraper">
          <img
            className="reviewImg"
            src={reviewimgUrl}
            alt={`${userId}의 리뷰사진`}
          />
          <div className="reviewTextWraper">
            <p className="reviewText">{text}</p>
            <span className="rate">{rate}</span>
            <span className="userId">{userId}</span>
          </div>
          {/* <Link to={`/products/${porductId}`}> */}
          <div className="productWraper">
            <img className="productImg" src={productImgUrl} alt={productName} />
            <p className="productName">
              {productName + '이름이 겁나 길면 어떻게 될까?'}
            </p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default ReviewCard;
