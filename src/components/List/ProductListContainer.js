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
    fetch(`/product/sort?sort=${this.props.sorting}`)
      .then(res => res.json())
      .then(res => {
        if (Number.isNaN(this.props.subCategoryId)) {
          if (this.props.mainCategoryId === 1) {
            const product = res.data;
            this.setState({ allProducts: product });
          } else {
            const product = res.data.filter(product => {
              return product.mainCategoryId === this.props.mainCategoryId;
            });
            this.setState({ allProducts: product });
          }
        } else {
          if (this.props.subCategoryId < 4) {
            const product = res.data;
            this.setState({ allProducts: product });
          } else {
            const product = res.data.filter(product => {
              return product.subCategoryId === this.props.subCategoryId;
            });
            this.setState({ allProducts: product });
          }
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.mainCategoryId !== prevProps.mainCategoryId ||
      (this.props.subCategoryId !== prevProps.subCategoryId &&
        this.props.subCategoryId) ||
      this.props.sorting !== prevProps.sorting
    ) {
      fetch(`/product/sort?sort=${this.props.sorting}`)
        .then(res => res.json())
        .then(res => {
          if (Number.isNaN(this.props.subCategoryId)) {
            if (this.props.mainCategoryId === 1) {
              const product = res.data;
              this.setState({ allProducts: product });
            } else {
              const product = res.data.filter(product => {
                return product.mainCategoryId === this.props.mainCategoryId;
              });
              this.setState({ allProducts: product });
            }
          } else {
            if (this.props.subCategoryId < 4) {
              const product = res.data;
              this.setState({ allProducts: product });
            } else {
              const product = res.data.filter(product => {
                return product.subCategoryId === this.props.subCategoryId;
              });
              this.setState({ allProducts: product });
            }
          }
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
