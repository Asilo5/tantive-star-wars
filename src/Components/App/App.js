import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
// import mockData from '../../data/movieData.js';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { getMovies } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
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

  componentDidMount = () => {
    getMovies()
      .then(films => films.sort((a, b) => parseInt(a.episode_id) - parseInt(b.episode_id)))
      .then(films => console.log(films))
      .catch(error => console.error('error'))
   }

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
          <Route path='/movies' render={() => <MoviesContainer movies={this.state.movies} userInfo={this.userInfo}/> } />
        </Switch>
      </main>
    );
  }
}

export default App;
