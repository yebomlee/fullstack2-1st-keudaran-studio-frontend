import React, { Component } from 'react';
import './ProductPhoto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class ProductPhoto extends Component {
  render() {
    return (
      <div className="ProductPhoto">
        <main className="mainPhoto">
          <img
            className="mainImage"
            alt="메인 이미지"
            src=" 
            https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
          />
          <FontAwesomeIcon
            className="leftButton photoButton"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className="rightButton photoButton"
            icon={faChevronRight}
          />
        </main>
        <ul id="subPhotos">
          <li className="subImage">
            <img
              alt="크리스마스 포스트카드"
              src=" https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt="안경잡이 루돌프"
              src="https://image.freepik.com/free-vector/smiling-moon-sky-night-with-santa-claus-sleigh_1308-55030.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt="달나라로 여행가는 산타"
              src="https://image.freepik.com/free-vector/santa-claus-boat-summer-theme_1308-53272.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt="일광욕 즐기는 산타"
              src="https://image.freepik.com/free-vector/santa-claus-reindeers-with-christmas-tree_197582-107.jpg"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
