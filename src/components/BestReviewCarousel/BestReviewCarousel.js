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
      reviews: reviews,
      currentIdx: 0,
    };
  }
  // 백엔드 API 수정 후 시간 나면
  // componentDidMount() {
  //   fetch('/review?id=2&sort=rating', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ reviews: data.result });
  //     });
  // }

  slideToRight = () => {
    const { currentIdx, reviews } = this.state;
    if (currentIdx === Math.ceil(reviews.length / 4) - 1) return;
    this.setState({ currentIdx: currentIdx + 1 });
  };

  slideToLeft = () => {
    const { currentIdx } = this.state;
    if (currentIdx === 0) return;
    this.setState({ currentIdx: currentIdx - 1 });
  };

  render() {
    const { currentIdx, reviews, isTransformTimeOn } = this.state;
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
              className={`container ${
                isTransformTimeOn ? 'transformTimeOn' : ''
              }`}
              style={{ transform: `translateX(${-currentIdx * 1200}px)` }}
            >
              {reviews.map((review, i) => {
                return <ReviewCard key={i} review={review} />;
              })}
            </div>
          </div>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="leftBtn"
            onClick={this.slideToLeft}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="rightBtn"
            onClick={this.slideToRight}
          />
        </div>
      </div>
    );
  }
}

export default BestReviewCarousel;
