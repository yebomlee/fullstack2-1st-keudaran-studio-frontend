import React from 'react';
import ProductCard from './ProductCard';
import './ProductListMdPicks.scss';

class ProductListMdPicks extends React.Component {
  render() {
    const { mdProducts } = this.props;
    return (
      <div className="ProductListMdPicks">
        <div className="mdPick">
          <h3>MD'S PICK</h3>
          <p className="line"></p>
        </div>
        <ul className="mdBox">
          {{ mdProducts }.map(md => {
            return (
              <ProductCard
                key={md.id}
                id={md.id}
                name={md.name}
                imgUrl={md.imgUrl[0]}
                hoverImgUrl={md.imgUrl[1]}
                price={md.price.toLocaleString()}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductListMdPicks;
