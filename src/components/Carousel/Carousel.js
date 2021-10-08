import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SlideImage from './SlideImage';
import DotButton from './DotButton';
import slideImgs from './mockData';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImgs: slideImgs,
      currentImg: 0,
      isTransformTimeOn: true,
    };
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    this.stopAutoSlide();
  }

  startAutoSlide = () => {
    const INTERVAL_TIME_MS = 3000;
    const LAST_IMG_WAITING_TIME_MS = 900;
    if (this.autoSlideId) return;

    this.autoSlideId = setInterval(() => {
      if (this.state.currentImg === this.state.slideImgs.length - 1) {
        this.setState({
          currentImg: this.state.slideImgs.length,
        });
        setTimeout(() => {
          this.setState({ isTransformTimeOn: false });
          this.setState({ currentImg: 0 });
        }, LAST_IMG_WAITING_TIME_MS);
      } else {
        this.setState({ isTransformTimeOn: true });
        this.setState({ currentImg: this.state.currentImg + 1 });
      }
    }, INTERVAL_TIME_MS);
  };

  stopAutoSlide = () => {
    clearInterval(this.autoSlideId);
  };

  slideToClickedImg = e => {
    if (this.state.currentImg === 0) this.setState({ isTransformTimeOn: true });
    this.setState({ currentImg: +e.target.className.charAt(3) });
  };

  slideToRight = () => {
    const { currentImg, slideImgs } = this.state;
    if (currentImg === 0) this.setState({ isTransformTimeOn: true });
    if (currentImg === slideImgs.length - 1) return;
    this.setState({ currentImg: currentImg + 1 });
  };

  slideToLeft = () => {
    const { currentImg } = this.state;
    if (currentImg === 0) return;
    this.setState({ currentImg: currentImg - 1 });
  };

  render() {
    const { currentImg, slideImgs, isTransformTimeOn } = this.state;
    return (
      <div className="Carousel">
        <div
          className={`container ${isTransformTimeOn ? 'transformTimeOn' : ''}`}
          style={{ transform: `translateX(${-currentImg * 100}vw)` }}
        >
          {slideImgs.map(imgData => {
            return <SlideImage key={imgData.id} url={imgData.imgUrl} />;
          })}
          <div className="SlideImage">
            <div className="inner">
              <img src={slideImgs[0].imgUrl} alt={slideImgs[0].name} />
            </div>
          </div>
        </div>
        <div className="dotBtnWraper">
          {slideImgs.map(imgData => {
            return (
              <DotButton
                key={imgData.id}
                id={imgData.id}
                currentImg={currentImg}
                slideToClickedImg={this.slideToClickedImg}
              />
            );
          })}
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
    );
  }
}

export default Carousel;
