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
            <p className="rateBox">
              <span className="rate">{rate}</span>
              <span className="userId">{userId}</span>
            </p>
          </div>
          <Link to={`/products/${porductId}`}>
            <div className="productWraper">
              <img
                className="productImg"
                src={productImgUrl}
                alt={productName}
              />
              <div className="textBox">
                <p className="productName">{productName}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
