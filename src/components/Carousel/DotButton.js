import React, { Component } from 'react';
import './DotButton.scss';

class DotButton extends Component {
  render() {
    const { slideImgs, currentIdx, slideToClickedImg } = this.props;
    return (
      <div className="DotButton">
        {slideImgs.map(img => {
          return (
            <div className="DotButton">
              <button
                className={`btn${img.id} dotBtn ${
                  img.id === currentIdx ? 'selected' : ''
                }`}
                onClick={() => slideToClickedImg(img.id)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DotButton;
