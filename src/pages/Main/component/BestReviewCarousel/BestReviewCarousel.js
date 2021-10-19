import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './BestReviewCarousel.scss';
import reviews from './bestReviewMockData';

class BestReviewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 0,
    };
    this.reviews = reviews;
  }

  slideToRight = () => {
    const { currentIdx } = this.state;
    const lastPageIdx = Math.ceil(this.reviews.length / 4) - 1;
    const newIdx = currentIdx + 1;

    if (currentIdx === lastPageIdx) return;

    this.setState({ currentIdx: newIdx });
  };

  slideToLeft = () => {
    const { currentIdx } = this.state;

    if (currentIdx === 0) return;

    this.setState({ currentIdx: currentIdx - 1 });
  };

  render() {
    const { currentIdx } = this.state;
    const reviewLength = this.reviews.length;
    let isRightLast = currentIdx === Math.ceil(reviewLength / 4) - 1;
    let isLeftLast = currentIdx === 0;

    return (
      <div className="BestReviewCarousel">
        <div className="titleWraper">
          <p className="title">BEST REVIEW</p>
          <span className="mention">
            우리가 사용해 본 제품, 당신의 이야기를 공유해 볼까요?
          </span>
        </div>
        <div className="btnNorm">
          <div className="containerWraper">
            <div
              className="container"
              style={{ transform: `translateX(${-currentIdx * 1200}px)` }}
            >
              {reviews.map(review => {
                return <ReviewCard key={review.id} review={review} />;
              })}
            </div>
          </div>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="leftBtn"
            style={{ display: isLeftLast ? 'none' : '' }}
            onClick={this.slideToLeft}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="rightBtn"
            style={{ display: isRightLast ? 'none' : '' }}
            onClick={this.slideToRight}
          />
        </div>
      </div>
    );
  }
}

export default BestReviewCarousel;
