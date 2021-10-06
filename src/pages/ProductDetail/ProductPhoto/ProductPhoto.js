import React, { Component } from 'react';
import './ProductPhoto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class ProductPhoto extends Component {
  render() {
    const {
      productId,
      name,
      mainImg,
      subImg,
      clickImgChang,
      imgChangeLeft,
      imgChangeRight,
    } = this.props;
    return (
      <div className="ProductPhoto">
        <main className="mainPhoto">
          <img className="mainImage" alt={name} src={mainImg} key={productId} />
          <FontAwesomeIcon
            className="leftButton photoButton"
            icon={faChevronLeft}
            onClick={imgChangeRight}
          />
          <FontAwesomeIcon
            className="rightButton photoButton"
            icon={faChevronRight}
            onClick={imgChangeLeft}
          />
        </main>
        <ul className="subPhotos">
          {subImg &&
            subImg.map(el => {
              return (
                <li className="subImage" key={el.id}>
                  <img alt={name} src={el.imagURL} onClick={clickImgChang} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
