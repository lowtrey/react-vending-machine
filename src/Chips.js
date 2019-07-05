import React from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class Chips extends React.Component {
  render() {
    return(
      <Message>
        <h1>BAGS EATEN: {this.props.bagsEaten}</h1>
        <button onClick={this.props.eatBag}>NOM NOM NOM NOM</button>
        <Link to='/'><h1>GO BACK</h1></Link>
      </Message>
    );
  }
}

export default Chips;