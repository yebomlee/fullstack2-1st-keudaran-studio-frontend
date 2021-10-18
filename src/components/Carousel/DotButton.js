import React, { Component } from 'react';
import './DotButton.scss';

class DotButton extends Component {
  render() {
    const { id, currentIdx, slideToClickedImg } = this.props;
    console.log(id, currentIdx);
    return (
      <div className="DotButton">
        <button
          className={`btn${id} dotBtn ${id === currentIdx ? 'selected' : ''}`}
          onClick={() => slideToClickedImg(id)}
        />
      </div>
    );
  }
}

export default DotButton;
