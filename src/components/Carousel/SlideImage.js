import React, { Component } from 'react';
import './SlideImage.scss';

class SlideImage extends Component {
  render() {
    const { img, name } = this.props;
    return (
      <div className="SlideImage">
        <div className="inner">
          <img src={img} alt={name} />
        </div>
      </div>
    );
  }
}

export default SlideImage;
