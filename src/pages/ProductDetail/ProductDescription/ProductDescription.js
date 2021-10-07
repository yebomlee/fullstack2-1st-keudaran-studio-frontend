import React, { Component } from 'react';
import ChoiceOption from './ChoiceOption';
import LikeButton from '../LikeButton/LikeButton';
import ChoiceOptionBox from '../ChoiceOptionBox/ChoiceOptionBox';
import './ProductDescription.scss';

class ProductDescription extends Component {
  render() {
    const { id, name, price, point, options } = this.props;
    const { origin, brand, shippingFee } = this.props;
    const { isLikedProduct, choiceOptionArray } = this.props;
    const {
      increaseCounter,
      decreaseCounter,
      choiceOptionChange,
      clickLikedProduct,
      deleteChoiceOption,
    } = this.props;
    let totalCount = 0;
    choiceOptionArray.forEach(option => {
      totalCount = totalCount + option.choiceCount;
    });
    const totalPrice = totalCount * price;
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
                  {point * 100} <span>%</span>
                </th>
              </tr>
              <tr className="tableCol">
                <td>배송비</td>
                <th>
                  배송비 주문금액에 상관없이 배송비가 {shippingFee}원
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
          <ChoiceOptionBox {...{ options, choiceOptionChange }} />
          {choiceOptionArray.map(choiceOption => {
            return (
              <ChoiceOption
                key={choiceOption.id}
                {...{
                  price,
                  choiceOption,
                  increaseCounter,
                  decreaseCounter,
                  deleteChoiceOption,
                }}
              />
            );
          })}
          <div className="totalPrice">
            <strong>총 상품 금액</strong>
            <span className="resultPrice">
              {totalPrice}
              <em>원</em>
            </span>
          </div>
        </article>
        <div className="activeButton">
          <p
            className="buyButton commonButton"
            onClick={() => {
              alert('준비중입니다');
            }}
          >
            구매하기
          </p>
          <p
            className="basketButton commonButton"
            onClick={() => {
              alert('준비중입니다');
            }}
          >
            장바구니
          </p>
          <LikeButton
            className="ChangeHeart"
            {...{ isLikedProduct, clickLikedProduct }}
          />
        </div>
      </section>
    );
  }
}

export default ProductDescription;
