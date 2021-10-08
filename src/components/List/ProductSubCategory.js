import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSubCategory.scss';

class ProductSubCategory extends React.Component {
  render() {
    const { id, name, selectSubCategory, selectedSubCategory } = this.props;
    return (
      <div className="ProductSubCategory">
        <li
          key={id}
          onClick={() => selectSubCategory(id)}
          className={id === selectedSubCategory ? 'clickedSub' : ''}
        >
          <Link to="#">{name}</Link>
          <div
            className={
              id === selectedSubCategory ? 'subCategoryDot' : 'hiddenDot'
            }
          >
            •
          </div>
        </li>
      </div>
    );
  }
}

export default ProductSubCategory;
