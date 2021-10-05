import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SlideImage from './SlideImage';
import imgData from './mockData';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgData: imgData,
      currentImg: 0,
    };
  }

  slideToN = e => {
    document.querySelector(
      '.container'
    ).style.transform = `translateX(-${e.target.className.charAt(3)}00vw)`;
    this.setState({ currentImg: +e.target.className.charAt(3) }, () => {
      document.querySelector('.selected').classList.remove('selected');
      document
        .querySelector(`.btn${this.state.currentImg}`)
        .classList.toggle('selected');
    });
  };

  slideRight = e => {
    if (this.state.currentImg >= this.state.imgData.length - 1) return;
    let ImgIdx = this.state.currentImg + 1;
    document.querySelector('.container').style.transform = `translateX(${-(
      ImgIdx +
      '' +
      '00'
    )}vw)`;

    this.setState({ currentImg: ImgIdx }, () => {
      document.querySelector('.selected').classList.remove('selected');
      document
        .querySelector(`.btn${this.state.currentImg}`)
        .classList.toggle('selected');
    });
  };

  slideLeft = e => {
    if (this.state.currentImg <= 0) return;
    let ImgIdx = this.state.currentImg - 1;
    document.querySelector('.container').style.transform = `translateX(${-(
      ImgIdx +
      '' +
      '00'
    )}vw)`;

    this.setState({ currentImg: ImgIdx }, () => {
      document.querySelector('.selected').classList.remove('selected');
      document
        .querySelector(`.btn${this.state.currentImg}`)
        .classList.toggle('selected');
    });
  };

  render() {
    return (
      <div className="Carousel">
        <div className="container">
          {this.state.imgData.map(data => {
            return (
              <SlideImage id={data.id} url={data.imgUrl} name={data.name} />
            );
          })}
        </div>
        <div className="dotBtnWraper">
          <button className="btn0 dotBtn selected" onClick={this.slideToN} />
          <button className="btn1 dotBtn" onClick={this.slideToN} />
          <button className="btn2 dotBtn" onClick={this.slideToN} />
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
