import React, { Component } from 'react';
import './SideMenu.scss';

class SideMenu extends Component {
  render() {
    const { menus } = this.props;
    return (
      <div className="SideMenu">
        <ul className="listContainer">
          {menus.map(menu => {
            return (
              <li className="menu" key={menu.id}>
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SideMenu;
