import React, { Component } from 'react';
import './ProductPhoto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class ProductPhoto extends Component {
  render() {
    const { id, name, mainImg, subImgs } = this.props;
    const { clickChangeImg, clickLeftChangeImg, clickRightChangeImg } =
      this.props;
    return (
      <div className="ProductPhoto">
        <main className="mainPhoto">
          <img className="mainImage" alt={name} src={mainImg} key={id} />
          <FontAwesomeIcon
            className="leftButton photoButton"
            icon={faChevronLeft}
            onClick={clickRightChangeImg}
          />
          <FontAwesomeIcon
            className="rightButton photoButton"
            icon={faChevronRight}
            onClick={clickLeftChangeImg}
          />
        </main>
        <ul className="subPhotos">
          {subImgs &&
            subImgs.map(el => {
              return (
                <li className="subImage" key={el.id}>
                  <img alt={name} src={el.imagURL} onClick={clickChangeImg} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
