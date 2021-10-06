import React, { Component } from 'react';
import './ProductPhoto.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class ProductPhoto extends Component {
  render() {
    const { id, name, thumbailURL, productImg } = this.props.mainData;
    console.log(productImg);
    return (
      <div className="ProductPhoto">
        <main className="mainPhoto">
          <img className="mainImage" alt={name} src={thumbailURL} key={id} />
          <FontAwesomeIcon
            className="leftButton photoButton"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className="rightButton photoButton"
            icon={faChevronRight}
          />
        </main>
        <ul className="subPhotos">
          <li className="subImage">
            <img
              alt={name}
              src="https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt={name}
              src="https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt={name}
              src="https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
          <li className="subImage">
            <img
              alt={name}
              src="https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
