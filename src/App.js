import React from 'react';
import VendingMachine from './VendingMachine';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
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
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
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
