import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
    const dotBtnList = document.getElementsByClassName('dotBtn');
    if (e.target.className.charAt(3) === '0') {
      document.querySelector('.container').style.transform =
        'translateX(000vw)';
      document.querySelector('.selected').classList.remove('selected');
      dotBtnList[0].classList.add('selected');
    } else if (e.target.className.charAt(3) === '1') {
      document.querySelector('.container').style.transform =
        'translateX(-100vw)';
      document.querySelector('.selected').classList.remove('selected');
      dotBtnList[1].classList.add('selected');
    } else if (e.target.className.charAt(3) === '2') {
      document.querySelector('.container').style.transform =
        'translateX(-200vw)';
      document.querySelector('.selected').classList.remove('selected');
      dotBtnList[2].classList.add('selected');
    }
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
        .querySelector(`.img${this.state.currentImg}`)
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
        .querySelector(`.img${this.state.currentImg}`)
        .classList.toggle('selected');
    });
  };

  render() {
    return (
      <div className="Carousel">
        <div className="container">
          <div className="inner">
            <img
              src="https://images.unsplash.com/photo-1630694040916-317e3f7d28f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2030&q=80"
              alt="Carousel1"
            />
          </div>
          <div className="inner">
            <img
              src="https://images.unsplash.com/photo-1630693912525-7a833b62c81f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2030&q=80"
              alt="Carousel1"
            />
          </div>
          <div className="inner">
            <img
              src="https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2030&q=80"
              alt="Carousel1"
            />
          </div>
        </div>
        <div className="dotBtnWraper">
          <button className="img0 dotBtn selected" onClick={this.slideToN} />
          <button className="img1 dotBtn" onClick={this.slideToN} />
          <button className="img2 dotBtn" onClick={this.slideToN} />
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
