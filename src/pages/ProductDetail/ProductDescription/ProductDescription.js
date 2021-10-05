import React, { Component } from 'react';
import './ProductDescription.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretUp,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

class ProductDescription extends Component {
  render() {
    return (
      <section className="ProductDescription">
        <h3>크리스마스 포스트카드 </h3>
        <p className="price">
          10,000 <em>원</em>
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
                <th>3 %</th>
              </tr>
              <tr className="tableCol">
                <td>배송비</td>
                <th>배송비 주문금액에 상관없이 배송비가 3,000원 청구됩니다.</th>
              </tr>
              <tr className="tableCol">
                <td>원산지</td>
                <th>한국</th>
              </tr>
              <tr className="tableCol">
                <td>브랜드</td>
                <th>조그만스튜디오</th>
              </tr>
            </tbody>
          </table>
          <dl className="option">
            <dt className="optionText">옵션</dt>
            <dd>
              <select className="optionBox">
                <option value>옵션 선택</option>
                <option value="0">안경잡이 루돌프 (10)</option>
                <option value="1">달나라로 여행가는 산타 (5)</option>
                <option value="2">일광욕 즐기는 산타 (1)</option>
                <option value="2">루돌프 선물 훔치는 산타 (13)</option>
              </select>
            </dd>
          </dl>
          <div className="productCount">
            <span className="productText">브라키오 책갈피</span>
            <div className="countBox">
              <input className="countInput" type="text" value="1" />
              <span className="countButton">
                <FontAwesomeIcon className="arrowButton" icon={faCaretUp} />
                <FontAwesomeIcon className="arrowButton" icon={faCaretDown} />
              </span>
            </div>
            <p className="changePrice">
              4000<em>원</em>
            </p>
          </div>
          <div className="totalPrice">
            <strong>총 상품 금액</strong>
            <span className="resultPrice">
              4000<em>원</em>
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
