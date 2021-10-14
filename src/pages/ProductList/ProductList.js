import React from 'react';
import qs from 'qs';
import ProductSubCategory from '../../components/List/ProductSubCategory';
import ProductListContainer from '../../components/List/ProductListContainer';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategoryData: '',
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
    fetch('/category', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ allCategoryData: data.categories });
      });
  }

  render() {
    const { selectedSubCategory } = this.state;
    const { location } = this.props;
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    return (
      <div className="ProductList">
        <div className="productListWrapper">
          <div className="stationeryWrap">
            {this.state.allCategoryData && (
              <div className="caterogyTitle">
                {this.state.allCategoryData[+query.main - 1].name}
              </div>
            )}
            <ul className="stationeryCategory">
              {/* {subCategory.map(sub => { */}
              {this.state.allCategoryData &&
                this.state.allCategoryData[+query.main - 1].subCategory.map(
                  (sub, idx) => {
                    return (
                      <ProductSubCategory
                        key={sub.id}
                        id={sub.id}
                        name={sub.name}
                        selectedSubCategory={selectedSubCategory}
                        selectSubCategory={this.selectSubCategory}
                        idx={idx}
                        main={+query.main}
                      />
                    );
                  }
                )}
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
