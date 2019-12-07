import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import { getMovies, getCharacters } from '../../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      characters: [],
      userName: '',
      userQuote: '',
      userRank: '',
      isLoading: true
    }
  }

  userInfo = ({name, quote, rank}) => {
     this.setState({
      userName: name,
      userQuote: quote,
      userRank: rank
     })
  }

  componentDidMount() {
    getMovies()
     .then(movies => movies.sort((a, b) => a.episode_id - b.episode_id))
     .then(movies => this.setState({ movies, isLoading: false}))
     .catch(err => console.log(err))
  }

  setCharacters = (charactersUrl) => {
    getCharacters(charactersUrl)
    .then(characterData => this.setState({characters: characterData}))
  }
  

  render() {
    const { isLoading, userName, userQuote, userRank } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
          {isLoading ? <img className='bb8-loading' src='https://media.giphy.com/media/eEbiAqk9YUT5e/giphy.gif' alt='BB8 giff' /> : 
          (<Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} userName={userName} userQuote={userQuote} userRank={userRank} setCharacters={this.setCharacters}/> } />)}
          <Route path='/characters' render={() => <CharactersContainer characters={this.state.characters} /> } />
        </Switch>
      </main>
    );
  }
}

export default App;
