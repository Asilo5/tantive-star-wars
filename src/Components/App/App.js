import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import { getMovies, getCharacters } from '../../apiCalls';

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import NavBar from '../NavBar/NavBar';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import ScrollText from '../ScrollText/ScrollText';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      characters: [],
      userName: '',
      userQuote: '',
      userRank: '',
      isLoading: true,
      favourites: [],
      movieScroll: {}
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
    getCharacters(charactersUrl).then(characterData => this.setState({characters: characterData}))
  }

  toggleFavourites = (id) => {
    const { favourites } = this.state;
    favourites.includes(id) ? this.deleteFavourites(id) : this.addFavourites(id);
  }

  addFavourites = (id) => {
    const { favourites } = this.state;
    return this.setState({ favourites : [...favourites, id] });
  }

  deleteFavourites = (id) => {
    const { favourites } = this.state;
    let deletedFav = favourites.filter((favourite) => favourite !== id);
    return this.setState({ favourites : deletedFav });
  }

  resetOnLogOut = () => {
    this.setState({
      characters: [],
      userName: '',
      userQuote: '',
      userRank: '',
      favourites: []
    })
  }
  
  addMovieScroll = (scroll) => {
    this.setState({ movieScroll: scroll });
  }

  render() {
    const { isLoading, userName, userQuote, userRank, favourites, movieScroll } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
          {isLoading ? <img className='bb8-loading' src='https://media.giphy.com/media/eEbiAqk9YUT5e/giphy.gif' alt='BB8 gif' /> : 
          (<Route exact path='/movies' render={() => 
            <section className='movie-section'>
             <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} resetOnLogOut={this.resetOnLogOut} />
             <MoviesContainer movies={this.state.movies} userName={userName} userQuote={userQuote} userRank={userRank} setCharacters={this.setCharacters} addMovieScroll={this.addMovieScroll}/>
            </section> 
          } />)}
          <Route path='/scroll' render={() => <ScrollText movieScroll={movieScroll} /> } />
          <Route path='/movies/:id' render={() => 
            <section className='movie-section'>
              <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} resetOnLogOut={this.resetOnLogOut} />
              <CharactersContainer characters={this.state.characters} toggleFavourites={this.toggleFavourites} favourites={favourites} />
            </section>
              } />
          <Route path='/favourites/' render={() =>
            <section className='movie-section'>
              <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} resetOnLogOut={this.resetOnLogOut} />
              <FavouritesContainer movies={this.state.movies} characters={this.state.characters} toggleFavourites={this.toggleFavourites} favourites={favourites} />
            </section>
          } />    
        </Switch>
      </main>
    );
  }
}

export default App;
