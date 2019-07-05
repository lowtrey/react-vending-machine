import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class VendingMachine extends React.Component {
  render() {
    return(
      <div>
        <Message>
          <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
        </Message>
        <Message>
          <Link exact to='/soda'><h1>Soda</h1></Link>
          <Link exact to='/chips'><h1>Chips</h1></Link>
          <Link exact to='/sardines'><h1>Sardines</h1></Link>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;