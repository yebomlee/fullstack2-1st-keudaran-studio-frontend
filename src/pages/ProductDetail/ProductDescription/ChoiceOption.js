import React, { Component } from 'react';
import './ChoiceOption.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

class ChoiceOption extends Component {
  render() {
    const { price, choiceOption } = this.props;
    const { increaseCounter, decreaseCounter } = this.props;
    const productTotalPrice = price * choiceOption.choiceCount;
    return (
      <div className="ChoiceOption">
        <div className="textButton">
          <span className="choiceText">
            {choiceOption?.name}({choiceOption?.quantity})
          </span>
          <div className="countBox">
            <input
              className="countInput"
              type="text"
              value={choiceOption.choiceCount}
              readOnly
            />
            <span className="countButton">
              <FontAwesomeIcon
                className="arrowButton"
                name="increament"
                icon={faCaretUp}
                onClick={() => increaseCounter(choiceOption)}
              />
              <FontAwesomeIcon
                className="arrowButton"
                name="decreament"
                icon={faCaretDown}
                onClick={() => decreaseCounter(choiceOption)}
              />
            </span>
          </div>
        </div>
        <p className="totalOptionPrice">
          {productTotalPrice}
          <em>원</em>
        </p>
      </div>
    );
  }
}

export default ChoiceOption;
