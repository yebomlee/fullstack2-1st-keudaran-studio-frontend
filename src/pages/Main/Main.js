import React from 'react';
import BestReviewCarousel from './component/BestReviewCarousel/BestReviewCarousel';
import Carousel from './component/Carousel/Carousel';
import Mainlist from './component/MainList/MainList';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Mainlist />
        <BestReviewCarousel />
      </div>
    );
  }
}

export default Main;
