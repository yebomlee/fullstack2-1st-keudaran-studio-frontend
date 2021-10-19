import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import './ProductPhoto.scss';

class ProductPhoto extends Component {
  render() {
    const { id, name, mainImg, subImgs } = this.props;
    const { hoverChangeImg, clickArrowChangeImg } = this.props;
    return (
      <div className="ProductPhoto">
        <main className="mainPhoto">
          <img className="mainImage" alt={name} src={mainImg} key={id} />
          <FontAwesomeIcon
            id="right"
            className="rightButton photoButton"
            icon={faChevronLeft}
            onClick={() => clickArrowChangeImg('right')}
          />
          <FontAwesomeIcon
            id="left"
            className="leftButton photoButton"
            icon={faChevronRight}
            onClick={() => clickArrowChangeImg('left')}
          />
        </main>
        <ul className="subPhotos">
          {subImgs &&
            subImgs.map(el => {
              return (
                <li className="subImage" key={el.id}>
                  <img
                    alt={name}
                    src={el.imageUrl}
                    onMouseOver={hoverChangeImg}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
