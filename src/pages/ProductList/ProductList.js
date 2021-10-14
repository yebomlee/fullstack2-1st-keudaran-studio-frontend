import React from 'react';
import qs from 'qs';
import ProductListMdPicks from '../../components/List/ProductListMdPicks';
import ProductSubCategory from '../../components/List/ProductSubCategory';
import ProductListContainer from '../../components/List/ProductListContainer';
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
  }

  render() {
    const { id, mdProducts, selectedSubCategory } = this.state;
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

          <ProductListContainer
            allSortedProducts={this.state.allSortedProducts}
            selectedSubCategory={selectedSubCategory}
            subCategoryId={+query.sub}
          />
        </div>
      </div>
    );
  }
}

export default ProductList;
