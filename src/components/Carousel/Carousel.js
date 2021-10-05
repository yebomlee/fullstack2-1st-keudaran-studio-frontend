import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  slideToN = e => {
    if (e.target.className.charAt(0) === '1') {
      document.querySelector('.container').style.transform =
        'translateX(000vw)';
    } else if (e.target.className.charAt(0) === '2') {
      document.querySelector('.container').style.transform =
        'translateX(-100vw)';
    } else if (e.target.className.charAt(0) === '3') {
      document.querySelector('.container').style.transform =
        'translateX(-200vw)';
    }
    // document.querySelector('.btn').classList.toggle('selected');
  };

  render() {
    return (
      <div className="Carousel">
        <div className="container">
          {/* <div className="inner">
            <img
              src="https://images.unsplash.com/photo-1624565698535-b0be89187ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80"
              alt="Carousel1"
            />
          </div> */}
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
          {/* <div className="inner">
            <img
              src="https://images.unsplash.com/photo-1624565698535-b0be89187ff4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80"
              alt="Carousel1"
            />
          </div> */}
        </div>
        <div className="btnWraper">
          <button className="1th btn selected" onClick={this.slideToN} />
          <button className="2nd btn" onClick={this.slideToN} />
          <button className="3rd btn" onClick={this.slideToN} />
        </div>
      </div>
    );
  }
}

export default Carousel;
