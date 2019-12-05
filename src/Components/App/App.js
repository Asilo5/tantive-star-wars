import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import { getMovies, getCharacters } from '../../apiCalls'
import MoviesContainer from '../MoviesContainer/MoviesContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      characters: [],
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

  componentDidMount() {
    getMovies()
     .then(movies => movies.sort((a, b) => a.episode_id - b.episode_id))
     .then(movies => this.setState({movies: movies}))
     .catch(err => console.log(err))
  }

  setCharacters = () => {
    const { movies } = this.state;

    let charactersUrl = movies.map((movie) => movie.characters);

    getCharacters(charactersUrl)
    .then(characterData => console.log(characterData))
  }
  

  render() {
    this.setCharacters();
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
