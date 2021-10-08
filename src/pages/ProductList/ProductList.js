import React from 'react';
import ProductSubCategory from '../../components/List/ProductSubCategory';
import ProductListContainer from '../../components/List/ProductListContainer';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      subCategory: [],
      selectedSubCategory: 0,
    };
  }

  selectSubCategory = id => {
    this.setState({
      selectedSubCategory: id,
    });
  };

  componentDidMount() {
    fetch('/data/stationery.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ subCategory: res.STATIONERY });
      });
  }

  render() {
    const { subCategory, selectedSubCategory } = this.state;
    return (
      <div className="ProductList">
        <div className="productListWrapper">
          <div className="stationeryWrap">
            <div className="caterogyTitle">Stationery</div>
            <ul className="stationeryCategory">
              {subCategory.map(sub => {
                return (
                  <ProductSubCategory
                    key={sub.id}
                    id={sub.id}
                    name={sub.name}
                    selectedSubCategory={selectedSubCategory}
                    selectSubCategory={this.selectSubCategory}
                  />
                );
              })}
            </ul>
          </div>

          <div className="selector">
            <select className="selectSorting" name="sort" id="sort">
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

          <ProductListContainer selectedSubCategory={selectedSubCategory} />
        </div>
      </div>
    );
  }
}

export default ProductList;
