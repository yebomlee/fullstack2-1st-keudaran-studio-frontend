import React from 'react';
import ProductListMdPicks from '../../components/List/ProductListMdPicks';
import ProductSubCategory from '../../components/List/ProductSubCategory';
import ProductListContainer from '../../components/List/ProductListContainer';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      mdProducts: [],
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
    fetch('/data/subCategoryProduct.json')
      .then(res => res.json())
      .then(res => {
        const sub = res.MAIN_CATEGORY.SUB_CATEGORY;
        const subArr = [];
        for (let i = 0; i < 3; i++) {
          subArr.push(...sub[i].products);
        }

        const mdArr = [];
        for (let j = 0; j < subArr.length; j++) {
          if (subArr[j].id === 1) {
            mdArr.push(subArr[j]);
          }
        }

        const mdProducts = mdArr.map((product, i) => {
          return {
            id: i,
            name: product.name,
            imgUrl: product.imgUrl,
            price: product.price,
          };
        });
        this.setState({ mdProducts: mdProducts });
      });

    fetch('/data/stationery.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ subCategory: res.STATIONERY });
      });
  }

  render() {
    const { mdProducts, subCategory, selectedSubCategory } = this.state;
    return (
      <div className="ProductList">
        <div className="productListWrapper">
          <ProductListMdPicks mdProducts={mdProducts} />

          <div className="productListWrap">
            <div className="subCaterogyTitle">Stationery</div>
            <ul className="subCategory">
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
