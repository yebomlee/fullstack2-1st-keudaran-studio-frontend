import React, { Component } from 'react';
import './ProductPhoto.scss';

class ProductPhoto extends Component {
  render() {
    return (
      <div id="Photo">
        {/*좌측이미지*/}
        <main id="mainPhoto">
          <img
            alt="이미지"
            src=" https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
          />
        </main>
        <ul id="subPhotos">
          <li class="subimage">
            <img
              alt="이미지"
              src=" https://image.freepik.com/free-vector/reindeer-hipster-santa-claus-vector-eps-10_87521-3525.jpg"
            />
          </li>
          <li class="subimage">
            <img
              alt="이미지"
              src="https://image.freepik.com/free-vector/smiling-moon-sky-night-with-santa-claus-sleigh_1308-55030.jpg"
            />
          </li>
          <li class="subimage">
            <img
              alt="이미지"
              src="https://image.freepik.com/free-vector/santa-claus-boat-summer-theme_1308-53272.jpg"
            />
          </li>
          <li class="subimage">
            <img
              alt="이미지"
              src="https://image.freepik.com/free-vector/santa-claus-reindeers-with-christmas-tree_197582-107.jpg"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductPhoto;
