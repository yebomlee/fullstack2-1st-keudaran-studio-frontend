import React, { Component } from 'react';
import ReviewCard from './ReviewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './BestReviewCarousel.scss';
import reviews from './MockData';

class BestReviewCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviews,
      currentIdx: 0,
      isTransformTimeOn: true,
    };
  }

  componentDidMount() {
    // this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    const INTERVAL_TIME_MS = 3000;
    const LAST_IMG_WAITING_TIME_MS = 900;
    if (this.autoSlideId) return;

    this.autoSlideId = setInterval(() => {
      if (this.state.currentIdx === this.state.reviews.length - 1) {
        this.setState({
          currentIdx: this.state.reviews.length,
        });
        setTimeout(() => {
          this.setState({ isTransformTimeOn: false });
          this.setState({ currentIdx: 0 });
        }, LAST_IMG_WAITING_TIME_MS);
      } else {
        this.setState({ isTransformTimeOn: true });
        this.setState({ currentIdx: this.state.currentIdx + 1 });
      }
    }, INTERVAL_TIME_MS);
  };

  stopAutoSlide = () => {
    clearInterval(this.autoSlideId);
  };

  slideToRight = () => {
    const { currentIdx, reviews } = this.state;
    if (currentIdx === 0) this.setState({ isTransformTimeOn: true });
    if (currentIdx === reviews.length - 1) return;
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
              {reviews.map(review => {
                return <ReviewCard key={review.id} review={review} />;
              })}

              {/* 무한회전을 위한 아이템 */}
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
