import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SlideImage from './SlideImage';
import DATA from './mockData';
import './Carousel.scss';
import DotButton from './DotButton';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: DATA,
      currentImg: 0,
    };
  }

  slideToN = e => {
    document.querySelector(
      '.container'
    ).style.transform = `translateX(-${e.target.className.charAt(3)}00vw)`;
    this.setState({ currentImg: +e.target.className.charAt(3) }, () => {});
  };

  slideRight = e => {
    if (this.state.currentImg >= this.state.imgData.length - 1) return;
    let ImgIdx = this.state.currentImg + 1;
    document.querySelector('.container').style.transform = `translateX(${-(
      ImgIdx +
      '' +
      '00'
    )}vw)`;

    this.setState({ currentImg: ImgIdx }, () => {});
  };

  slideLeft = e => {
    if (this.state.currentImg <= 0) return;
    let ImgIdx = this.state.currentImg - 1;
    document.querySelector('.container').style.transform = `translateX(${-(
      ImgIdx +
      '' +
      '00'
    )}vw)`;

    this.setState({ currentImg: ImgIdx }, () => {});
  };

  render() {
    return (
      <div className="Carousel">
        <div className="container">
          {this.state.imgData.map(data => {
            return <SlideImage key={data.id} url={data.imgUrl} />;
          })}
        </div>
        <div className="dotBtnWraper">
          {this.state.imgData.map(data => {
            return (
              <DotButton
                key={data.id}
                id={data.id}
                currentImg={this.state.currentImg}
                slideToN={this.slideToN}
              />
            );
          })}
        </div>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="leftBtn"
          onClick={this.slideLeft}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className="rightBtn"
          onClick={this.slideRight}
        />
      </div>
    );
  }
}

export default Carousel;
