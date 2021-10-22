import React from 'react';
import qs from 'qs';
import ProductListMdPicks from '../../components/List/ProductListMdPicks';
import ProductSubCategory from '../../components/List/ProductSubCategory';
import ProductListContainer from '../../components/List/ProductListContainer';
import { API_ENDPOINT } from '../../api';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      allCategoryData: '',
      mdProducts: [],
      subCategory: [],
      selectedSubCategory: 0,
      allSortedProducts: '',
      sorting: 'name',
    };
  }

  changeSortingSelector = e => {
    this.setState({ sorting: e.currentTarget.value });
  };

  selectSubCategory = id => {
    this.setState({
      selectedSubCategory: id,
    });
  };

  componentDidMount() {
    fetch(`${API_ENDPOINT}/category`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ allCategoryData: data.categories });
      });

    fetch(`${API_ENDPOINT}/data/subCategoryProduct.json`)
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
  }

  render() {
    const { id, mdProducts, selectedSubCategory, allSortedProducts, sorting } =
      this.state;
    const { location } = this.props;
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    return (
      <div className="ProductList">
        <div className="productListWrapper">
          <ProductListMdPicks id={id} mdProducts={mdProducts} />
          <div className="productListWrap">
            {this.state.allCategoryData && (
              <div className="caterogyTitle">
                {this.state.allCategoryData[+query.main - 1].name}
              </div>
            )}
            <ul className="subCategory">
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
            <select
              className="selectSorting"
              name="sort"
              id="sort"
              onChange={this.changeSortingSelector}
            >
              <option value="name">상품명순</option>
              <option value="recent">신상품순</option>
              <option value="lowprice">낮은가격순</option>
              <option value="highprice">높은가격순</option>
            </select>
          </div>

          <ProductListContainer
            allSortedProducts={allSortedProducts}
            selectedSubCategory={selectedSubCategory}
            subCategoryId={+query.sub}
            mainCategoryId={+query.main}
            sorting={sorting}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
