import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <div className='Navbar'>
        <NavLink exact to='/' activeClassName='Navbar-active'><h1>Home</h1></NavLink>
        <NavLink exact to='/soda' activeClassName='Navbar-active'><h1>Soda</h1></NavLink>
        <NavLink exact to='/chips' activeClassName='Navbar-active'><h1>Chips</h1></NavLink>
        <NavLink exact to='/sardines' activeClassName='Navbar-active'><h1>Sardines</h1></NavLink>
      </div>
    );
  }
}

export default Navbar;