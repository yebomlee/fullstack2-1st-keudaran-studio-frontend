import React from 'react';
import ProductCard from '../../components/List/ProductCard';
import './ProductList.scss';
import { SUB_MOCK } from './subCategory';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      subid: [],
      subCategory: false,
    };
  }

  fiteredSub = id => {
    document.getElementsByName(id)[0].classList.toggle('clickedSub');
  };

  render() {
    return (
      <div className="ProductList">
        <div className="stationeryWrap">
          <div className="caterogyTitle">Stationery</div>
          <ul className="stationeryCategory">
            {SUB_MOCK.map(subName => (
              <li key={subName.id}>
                <a
                  name={subName.id}
                  href="#"
                  className={this.state.subCategory ? 'clickedSub' : 'stnList'}
                  onClick={() => this.fiteredSub(subName.id)}
                >
                  {subName.name}
                </a>
              </li>
            ))}
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
          <ProductCard
            name={'UBHC 에어팟 하드케이스'}
            imgUrl={
              'https://www.jogumanstore.com/shopimages/playwin/0050010000012.jpg?1604394671'
            }
            price={'14,000'}
          />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </div>
    );
  }
}

export default ProductList;
