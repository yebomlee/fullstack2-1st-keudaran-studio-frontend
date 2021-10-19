import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faMinusSquare } from '@fortawesome/free-regular-svg-icons';
import './ChoiceOption.scss';

class ChoiceOption extends Component {
  render() {
    const { price, choiceOption } = this.props;
    const { increaseCounter, decreaseCounter, deleteChoiceOption } = this.props;
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
                icon={faCaretUp}
                onClick={() => increaseCounter(choiceOption?.id)}
              />
              <FontAwesomeIcon
                className="arrowButton"
                icon={faCaretDown}
                onClick={() => decreaseCounter(choiceOption?.id)}
              />
            </span>
          </div>
        </div>
        <div>
          <p className="totalOptionPrice">
            {productTotalPrice?.toLocaleString()}
            <em>원</em>
          </p>
          <FontAwesomeIcon
            className="deleteOptionChoice"
            icon={faMinusSquare}
            onClick={() => deleteChoiceOption(choiceOption.id)}
          />
        </div>
      </div>
    );
  }
}

export default ChoiceOption;
