import React, { Component } from 'react';
import MenuItem from './menuItem.js';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <h2 className="App-title">
            <MenuItem name="Home" homepage="index.js" />
            <MenuItem name="Products" homepage="index.js" />
            <MenuItem name="Suppliers" homepage="index.js" />            
        </h2>        
      </div>
    );
  }
}

export default Menu;
