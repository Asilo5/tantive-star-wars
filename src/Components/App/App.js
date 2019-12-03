import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userQuote: '',
      userRank: ''
    }
  }

  userInfo = ({name, rank, quote}) => {
     this.setState({
      userName: name,
      userQuote: rank,
      userRank: quote
     })
  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
        </Switch>
      </main>
    );
  }
}

export default App;
