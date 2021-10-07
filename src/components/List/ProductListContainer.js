import React from 'react';
import ProductCard from './ProductCard';
import './ProductListContainer.scss';

class ProductListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      indexedAllProducts: [],
      allProducts: [],
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
        const subCategory = res.MAIN_CATEGORY.SUB_CATEGORY;
        const arr = [];
        this.setState({ allProducts: subCategory });
        for (let k = 0; k < subCategory.length; k++) {
          arr.push(...subCategory[k].products);
        }
        const newArr = arr.map((product, i) => {
          return {
            id: i,
            name: product.name,
            imgUrl: product.imgUrl,
            price: product.price,
          };
        });
        this.setState({ indexedAllProducts: newArr });
      });
  }

  render() {
    const { indexedAllProducts, allProducts } = this.state;
    const { selectedSubCategory } = this.props;
    let fileringProduct = [];
    if (selectedSubCategory === 0) {
      fileringProduct = indexedAllProducts;
    } else {
      fileringProduct = JSON.parse(
        JSON.stringify(allProducts[selectedSubCategory - 1].products)
      );
    }

    return (
      <div className="ProductListContainer">
        <ul className="productCard">
          {fileringProduct.map(products => {
            return (
              <ProductCard
                key={products.id}
                name={products.name}
                imgUrl={products.imgUrl[0]}
                hoverImgUrl={products.imgUrl[1]}
                price={products.price}
              />
            );
          })}
          ;
        </ul>
      </div>
    );
  }
}

export default ProductListContainer;
