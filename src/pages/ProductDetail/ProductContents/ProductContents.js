import React, { Component } from 'react';
import './ProductContents.scss';

class ProductContents extends Component {
  render() {
    return (
      <content className="middleContent">
        클릭시 상세정보{/*기철쓰~*/}
        <img
          alt="대체 사진"
          src="https://www.jogumanstore.com/shopimages/playwin/0060060000012.jpg?1625563215"
        />
      </content>
    );
  }
}

export default ProductContents;
