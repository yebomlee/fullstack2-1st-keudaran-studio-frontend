import React, { Component } from 'react';
import './CoffeeList.scss';

class NavList extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <li className="categoryMenu" id={id}>
        <button className="dropBtn">
        {this.props..map(beverages => {
          return (
            <CoffeeCard
              key={beverages.id}
              id={beverages.id}
              img={beverages.imgUrl}
              name={beverages.name}
            />
          );
        })}
      </ul>
    );
  }
}

export default NavList;
