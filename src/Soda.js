import React from 'react';
import { Link } from 'react-router-dom';

class Soda extends React.Component {
  render() {
    return(
      <div>
        <h1>OMG SUGARRRRRRRRRR</h1>
        <Link to='/'><h1>GO BACK</h1></Link>
      </div>
    );
  }
}

export default Soda;