import React, { Component } from 'react';
import './DotButton.scss';

class DotButton extends Component {
  render() {
    return (
      <div className="DotButton">
        <button
          className={`btn${this.props.id} dotBtn ${
            this.props.id === this.props.currentImg ? 'selected' : null
          }`}
          onMouseUp={this.props.slideToN}
        />
      </div>
    );
  }
}

export default DotButton;
