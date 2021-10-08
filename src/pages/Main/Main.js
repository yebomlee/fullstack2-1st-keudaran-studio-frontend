import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Review from '../../components/Review/Review';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Review />
      </div>
    );
  }
}

export default Main;
