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

  // 구현중
  componentDidMount() {
    const { currentImg, imgData } = this.state;
    setInterval(() => {
      console.log(this.state.currentImg, imgData.length);
      if (currentImg >= imgData.length - 1) {
        this.setState(state => {
          return { currentImg: 0 };
        });
      } else {
        this.setState(state => {
          return { currentImg: state.currentImg + 1 };
        });
      }
    }, 2000);
  }

  slideToN = e => {
    const { className } = e.target;
    const { currentImg } = this.state;
    this.setState({ currentImg: parseInt(className.charAt(3)) }, () => {
      document.querySelector(
        '.container'
      ).style.transform = `translateX(-${currentImg}00vw)`;
    });
  };

  slideRight = () => {
    const { currentImg, imgData } = this.state;
    if (currentImg >= imgData.length - 1) return;
    this.setState({ currentImg: currentImg + 1 }, () => {
      document.querySelector('.container').style.transform = `translateX(${
        -this.state.currentImg * 100
      }vw)`;
    });
  };

  slideLeft = () => {
    const { currentImg } = this.state;
    if (currentImg <= 0) return;
    this.setState({ currentImg: currentImg - 1 }, () => {
      document.querySelector('.container').style.transform = `translateX(${
        -this.state.currentImg * 100
      }vw)`;
    });
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
