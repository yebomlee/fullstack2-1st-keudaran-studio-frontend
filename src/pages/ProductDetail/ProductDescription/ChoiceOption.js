import React, { Component } from 'react';
import './ChoiceOption.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class ChoiceOption extends Component {
  render() {
    const {
      userCount,
      totalPrice,
      choiceOption,
      incrementCounter,
      decrementCounter,
    } = this.props;
    return (
      <div className="ChoiceOption">
        <span className="choiceText">
          {choiceOption?.name}({choiceOption?.quantity})
        </span>
        <div className="countBox">
          <input
            className="countInput"
            type="text"
            value={userCount}
            readOnly
          />
          <span className="countButton">
            <FontAwesomeIcon
              className="arrowButton"
              name="increament"
              icon={faCaretUp}
              onClick={incrementCounter}
            />
            <FontAwesomeIcon
              className="arrowButton"
              name="decreament"
              icon={faCaretDown}
              onClick={decrementCounter}
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
