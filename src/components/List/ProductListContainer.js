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
    fetch('/product/sort?sort=name')
      .then(res => res.json())
      .then(res => {
        const product = res.data.filter(product => {
          return product.subCategoryId === this.props.subCategoryId;
        });
        this.setState({ allProducts: product });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.subCategoryId !== prevProps.subCategoryId) {
      fetch('/product/sort?sort=name')
        .then(res => res.json())
        .then(res => {
          const product = res.data.filter(product => {
            return product.subCategoryId === this.props.subCategoryId;
          });
          this.setState({ allProducts: product });
        });
    }
  }

  render() {
    const { allProducts } = this.state;

    return (
      <div className="ProductListContainer">
        <ul className="productContainer">
          {allProducts.map(products => {
            return (
              <ProductCard
                key={products.id}
                id={products.id}
                name={products.name}
                imgUrl={products.thumbnailUrl}
                hoverImgUrl={products.hoverImages}
                price={products.price.toLocaleString()}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductListContainer;
