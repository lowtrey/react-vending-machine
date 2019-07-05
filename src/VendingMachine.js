import React from 'react';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

class VendingMachine extends React.Component {
  render() {
    return(
      <div>
        <div>
          <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </div>
        <div>
          <Soda />
          <Chips />
          <Sardines />
        </div>
      </div>
    );
  }
}

export default VendingMachine;