import React, { Component } from 'react';
import ChoiceOption from './ChoiceOption';
import './ProductDescription.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class ProductDescription extends Component {
  render() {
    const {
      id,
      name,
      price,
      point,
      origin,
      brand,
      shippingFree,
      option,
      userCount,
      choiceOption,
      incrementCounter,
      decrementCounter,
      selectBoxChange,
    } = this.props;
    const totalPrice = userCount * price;
    return (
      <section className="ProductDescription" key={id}>
        <h3>{name} </h3>
        <p className="price">
          {price} <em>원</em>
        </p>
        <article className="info">
          <table className="table">
            <colgroup>
              <col width="100"></col>
              <col width="*"></col>
            </colgroup>
            <tbody className="tableBody">
              <tr className="tableCol">
                <td>적립금</td>
                <th>
                  {point} <span>%</span>
                </th>
              </tr>
              <tr className="tableCol">
                <td>배송비</td>
                <th>
                  배송비 주문금액에 상관없이 배송비가 {shippingFree}원
                  청구됩니다.
                </th>
              </tr>
              <tr className="tableCol">
                <td>원산지</td>
                <th>{origin}</th>
              </tr>
              <tr className="tableCol">
                <td>브랜드</td>
                <th>{brand}</th>
              </tr>
            </tbody>
          </table>
          <dl className="option">
            <dt className="optionText">옵션</dt>
            <dd>
              <select className="optionBox" onChange={selectBoxChange}>
                <option value={[]}>옵션 선택</option>
                {option.map(el => {
                  return (
                    <option value={el.id} key={el.id}>
                      {el.name} ({el.quantity})
                    </option>
                  );
                })}
              </select>
            </dd>
          </dl>
          <ChoiceOption
            userCount={userCount}
            totalPrice={totalPrice}
            choiceOption={choiceOption}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
          />
          <div className="totalPrice">
            <strong>총 상품 금액</strong>
            <span className="resultPrice">
              {totalPrice}
              <em>원</em>
            </span>
          </div>
        </article>
        <div className="activeButton">
          <p className="buyButton commonButton">구매하기</p>
          <p className="basketButton commonButton">장바구니</p>
          <FontAwesomeIcon className="likeButton" icon={faHeart} />
        </div>
      </section>
    );
  }
}

export default ProductDescription;
