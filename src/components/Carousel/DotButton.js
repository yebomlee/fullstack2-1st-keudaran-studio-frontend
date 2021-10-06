import React, { Component } from 'react';
import './DotButton.scss';

class DotButton extends Component {
  render() {
    const { id, currentImg, slideToClickedImg } = this.props;
    return (
      <div className="DotButton">
        <button
          className={`btn${id} dotBtn ${id === currentImg ? 'selected' : ''}`}
          onClick={slideToClickedImg}
        />
      </div>
    );
  }
}

export default DotButton;
