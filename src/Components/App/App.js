import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import './App.scss';
import { getMovies } from '../../apiCalls'
import MoviesContainer from '../MoviesContainer/MoviesContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      userName: '',
      userQuote: '',
      userRank: '',
      isLoading: true
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
    //  .then(movies => console.log(movies))
     .then(movies => this.setState({movies: movies, isLoading: false}))
     .catch(err => console.log(err))
  }
  

  render() {
    const { isLoading, userName, userQuote, userRank } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Login userInfo={this.userInfo}/> } />
          {isLoading ? <img className='bb8-loading' src='https://media.giphy.com/media/eEbiAqk9YUT5e/giphy.gif' alt='BB8 giff' /> : 
  (<Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} userName={userName} userQuote={userQuote} userRank={userRank} /> } />)}
        </Switch>
      </main>
    );
  }
}

export default App;
