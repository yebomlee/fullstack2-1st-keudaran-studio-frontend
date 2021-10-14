import React from 'react';
import BestReviewCarousel from '../../components/BestReviewCarousel/BestReviewCarousel';
import Carousel from '../../components/Carousel/Carousel';
import Mainlist from '../../components/MainList/MainList';

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
