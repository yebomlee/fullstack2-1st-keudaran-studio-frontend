import React, { Component } from 'react';
import './ChoiceOption.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class ChoiceOption extends Component {
  render() {
    const { choiceCount, totalPrice, option } = this.props;
    const { increaseCounter, decreaseCounter } = this.props;
    return (
      <div className="ChoiceOption">
        <span className="choiceText">
          {option?.name}({option?.quantity})
        </span>
        <div className="countBox">
          <input
            className="countInput"
            type="text"
            value={choiceCount}
            readOnly
          />
          <span className="countButton">
            <FontAwesomeIcon
              className="arrowButton"
              name="increament"
              icon={faCaretUp}
              onClick={() => increaseCounter(option)}
            />
            <FontAwesomeIcon
              className="arrowButton"
              name="decreament"
              icon={faCaretDown}
              onClick={decreaseCounter}
            />
          </span>
        </div>
        <p className="totalOptionPrice">
          {totalPrice}
          <em>원</em>
        </p>
      </div>
    );
  }
}

export default ChoiceOption;
