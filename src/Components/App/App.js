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
      // selectedMovie: {},
      userName: '',
      userQuote: '',
      userRank: '',
      isLoading: true,
      favourites: []
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
    // let id = parseInt(e.target.id)
    // let selectedMovie = this.state.movies[id-1];
    // this.setState({selectedMovie: selectedMovie})
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
  
  render() {
    const { isLoading, userName, userQuote, userRank, favourites } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
          {isLoading ? <img className='bb8-loading' src='https://media.giphy.com/media/eEbiAqk9YUT5e/giphy.gif' alt='BB8 gif' /> : 
          (<Route exact path='/movies' render={() => 
            <section className='movie-section'>
             <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} />
             <MoviesContainer movies={this.state.movies} userName={userName} userQuote={userQuote} userRank={userRank} setCharacters={this.setCharacters}/>
            </section>
          } />)}
          <Route path='/movies/:id' render={() => 
            <section className='movie-section'>
              <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} />
              <CharactersContainer characters={this.state.characters} toggleFavourites={this.toggleFavourites} favourites={favourites} />
              <ScrollText movies={this.state.movies} characters={this.state.characters}  /> 
            </section>
              } />
          <Route path='/favourites/' render={() =>
            <section className='movie-section'>
              <NavBar userName={userName} userQuote={userQuote} userRank={userRank} favCount={favourites.length} />
              <FavouritesContainer movies={this.state.movies} characters={this.state.characters} toggleFavourites={this.toggleFavourites} favourites={favourites} />
            </section>
          } />    
        </Switch>
      </main>
    );
  }
}

export default App;
