import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <div className='Navbar'>
        <NavLink exact to='/' activeClassName='active'><h1>Home</h1></NavLink>
        <NavLink exact to='/soda' activeClassName='active'><h1>Soda</h1></NavLink>
        <NavLink exact to='/chips' activeClassName='active'><h1>Chips</h1></NavLink>
        <NavLink exact to='/sardines' activeClassName='active'><h1>Sardines</h1></NavLink>
      </div>
    );
  }
}

export default Navbar;