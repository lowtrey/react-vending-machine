import React from 'react';
import VendingMachine from './VendingMachine';
import { Route, NavLink, Switch } from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bagsEaten: 0};
    this.eatBag = this.eatBag.bind(this);
  }
  eatBag() {
    this.setState(st => ({ bagsEaten: st.bagsEaten + 1 }));
  }
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to='/soda' activeClassName='active'><h1>Soda</h1></NavLink>
          <NavLink exact to='/chips' activeClassName='active'><h1>Chips</h1></NavLink>
          <NavLink exact to='/sardines' activeClassName='active'><h1>Sardines</h1></NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/soda" component={Soda} />
          <Route 
            exact path='/chips' 
            render={() => <Chips eatBag={this.eatBag} bagsEaten={this.state.bagsEaten} />} 
          />
          <Route exact path="/sardines" component={Sardines} />
        </Switch>
      </div>
    );
  }
}

export default App;
