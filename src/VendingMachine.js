import React from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <div>
          <Link to='/soda'><h1>Soda</h1></Link>
          <Link to='/chips'><h1>Chips</h1></Link>
          <Link to='/sardines'><h1>Sardines</h1></Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;