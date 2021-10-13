import React, { Component } from 'react';
import './ChoiceOptionBox.scss';

class ChoiceOptionBox extends Component {
  render() {
    const { productOption, choiceOptionChange } = this.props;
    return (
      <dl className="ChoiceOptionBox">
        <dt className="optionText">옵션</dt>
        <dd>
          <select className="optionBox" onChange={choiceOptionChange}>
            <option value={[]}>옵션 선택</option>
            {productOption?.map(option => {
              const { id, name, quantity } = option;
              return (
                <option value={name} key={id}>
                  {name} ({quantity})
                </option>
              );
            })}
          </select>
        </dd>
      </dl>
    );
  }
}

export default ChoiceOptionBox;
