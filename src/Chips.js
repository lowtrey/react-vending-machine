import React from 'react';
import { Link } from 'react-router-dom';

class Chips extends React.Component {
  render() {
    return(
      <div>
        <h1>BAGS EATEN: {this.props.bagsEaten}</h1>
        <button onClick={this.props.eatBag}>NOM NOM NOM NOM</button>
        <Link to='/'><h1>GO BACK</h1></Link>
      </div>
    );
  }
}

export default Chips;