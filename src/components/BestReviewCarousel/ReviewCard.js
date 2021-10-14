import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faStar as faStarR } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarS } from '@fortawesome/free-solid-svg-icons';
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

    const booleanRate = [];
    if (rate) {
      for (let i = 0; i < rate; i++) booleanRate.push(true);
      for (let i = 0; i < 5 - rate; i++) booleanRate.push(false);
    }

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
              <div className="starWrapper">
                {booleanRate.map(boolean => {
                  return (
                    <FontAwesomeIcon
                      icon={boolean ? faStarS : faStarR}
                      className={boolean ? 'starOn' : 'starOff'}
                    />
                  );
                })}
              </div>
              <span className="userId">{userId}</span>
            </p>
          </div>
          <Link to={`/products/${porductId}`}>
            <div className="productWraper">
              <div className="imgWrapper">
                <img
                  className="productImg"
                  src={productImgUrl}
                  alt={productName}
                />
              </div>
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
