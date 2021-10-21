import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SlideImage from './SlideImage';
import DotButton from './DotButton';
import slideImgs from './carouselMockData';
import './Carousel.scss';

const TRANSITION_WAITING_TIME = 2500;
const TRANSITION_TIME = 900;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIdx: 1,
    };
    this.slideImgs = slideImgs;
    this.isButtonAvailable = true;
    this.isSlideAnimationOn = true;
  }

  componentDidMount() {
    setInterval(this.slideToRight, TRANSITION_WAITING_TIME);
  }

  componentDidUpdate() {
    if (this.isSlideAnimationOn) return;

    setTimeout(() => {
      this.isSlideAnimationOn = true;
    }, 50);
  }

  slideToRight = () => {
    if (!this.isButtonAvailable || !this.isSlideAnimationOn) return;

    const { currentIdx } = this.state;
    const imgLength = this.slideImgs.length;
    const newIdx = currentIdx + 1;
    this.setState({ currentIdx: newIdx });

    if (newIdx === imgLength + 1) {
      this.isButtonAvailable = false;
      setTimeout(() => {
        this.isSlideAnimationOn = false;
        this.setState({ currentIdx: 1 });
        this.isButtonAvailable = true;
      }, TRANSITION_TIME);
    }
  };

  slideToLeft = () => {
    if (!this.isButtonAvailable || !this.isSlideAnimationOn) return;

    const { currentIdx } = this.state;
    const newIdx = currentIdx - 1;
    const imgLength = this.slideImgs.length;
    this.setState({ currentIdx: newIdx });

    if (newIdx === 0) {
      this.isButtonAvailable = false;
      setTimeout(() => {
        this.isSlideAnimationOn = false;
        this.setState({ currentIdx: imgLength });
        this.isButtonAvailable = true;
      }, TRANSITION_TIME);
    }
  };

  slideToClickedImg = id => {
    this.setState({ currentIdx: id });
  };

  render() {
    const { currentIdx } = this.state;
    const imgLength = this.slideImgs.length;
    return (
      <div className="Carousel">
        <div className="btnNorm">
          <div className="containerWraper">
            <div
              className="container"
              style={{
                transform: `translateX(${-currentIdx * 1500}px)`,
                transition: this.isSlideAnimationOn
                  ? `transform ${TRANSITION_TIME}ms ease`
                  : 'none',
              }}
            >
              <div className="SlideImage">
                <div className="inner">
                  <img
                    src={slideImgs[imgLength - 1].path}
                    alt={slideImgs[imgLength - 1].name}
                  />
                </div>
              </div>
              {slideImgs.map(img => {
                return (
                  <Link to={`/products/${img.productId}`} key={img.id}>
                    <SlideImage name={img.name} img={img.path} />
                  </Link>
                );
              })}
              <div className="SlideImage">
                <div className="inner">
                  <img src={slideImgs[0].path} alt={slideImgs[0].name} />
                </div>
              </div>
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
        <DotButton
          slideImgs={slideImgs}
          currentIdx={currentIdx}
          slideToClickedImg={this.slideToClickedImg}
        />
      </div>
    );
  }
}

export default Carousel;
