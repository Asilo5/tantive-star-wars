import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login /> } />
        </Switch>
      </main>
    );
  }
}

export default App;
