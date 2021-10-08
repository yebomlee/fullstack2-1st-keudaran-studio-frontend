import React, { Component } from 'react';
import './SlideImage.scss';

class SlideImage extends Component {
  render() {
    const { url, name } = this.props;
    return (
      <div className="SlideImage">
        <div className="inner">
          <img src={url} alt={name} />
        </div>
      </div>
    );
  }
}

export default SlideImage;
