import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Soda extends React.Component {
  render() {
    return(
      <Message>
        <h1>OMG SUGARRRRRRRRRR</h1>
        <Link to='/'><h1>GO BACK</h1></Link>
      </Message>
    );
  }
}

export default Soda;