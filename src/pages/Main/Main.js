import React from 'react';
import BestReviewCarousel from '../../components/BestReviewCarousel/BestReviewCarousel';
import Carousel from '../../components/Carousel/Carousel';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <BestReviewCarousel />
      </div>
    );
  }
}

export default Main;
