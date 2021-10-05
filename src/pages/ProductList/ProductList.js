import React from 'react';
import ProductCard from '../../components/List/ProductCard';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  fiteredSub = () => {
    console.log('filter');
  };

  render() {
    return (
      <div className="ProductList">
        <div className="stationeryWrap">
          <div className="caterogyTitle">Stationery</div>
          <ul className="stationeryCategory">
            <li className="stnList" onClick={this.fiteredSub}>
              Postcard
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Notebook
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Memo Pad
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Poster Tape
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Tattoo
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Sticker
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Sticker
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Diary
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Calendar
            </li>
            <li className="stnList" onClick={this.fiteredSub}>
              Etc
            </li>
          </ul>
        </div>

        <div className="selector">
          <select name="sort" id="sort">
            <option value="popular" defaultValue>
              인기상품순
            </option>
            <option value="new">신상품순</option>
            <option value="named">상품명순</option>
            <option value="cheap">낮은가격순</option>
            <option value="expensive">높은가격순</option>
            <option value="mostClicked">조회순</option>
          </select>
        </div>
        <ul className="productCard">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </div>
    );
  }
}

export default ProductList;
