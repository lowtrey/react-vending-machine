import React from 'react';
import { Link } from 'react-router-dom';

class Sardines extends React.Component {
  render() {
    return(
      <div>
        <h1>YOU DONT EAT THE SARDINES. THE SARDINES, THEY EAT YOU</h1>
        <Link to='/'><h1>GO BACK</h1></Link>
      </div>
    );
  }
}

export default Sardines;