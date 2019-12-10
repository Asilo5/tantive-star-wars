 import React from 'react';
 import './NavBar.scss';
 import PropTypes from 'prop-types';
 import { NavLink } from 'react-router-dom';

 const NavBar = ({userName, userQuote, userRank, favCount, resetOnLogOut }) => {
     return (
         <nav>
            <div>
                <img src='https://am22.akamaized.net/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg' alt='Princess Leia' />
                <h2>{userName}</h2>
                <h3>"{userQuote}"</h3>
                <h3>{userRank}</h3>
            </div>
            <div className='nav-links'>
                <NavLink to='/movies' className='nav' activeClassName='active-nav' >Movies</NavLink>
                <NavLink to='/favourites' className='nav' activeClassName='active-nav' >Favourites {favCount}</NavLink>
                <NavLink exact to='/' > <button className='nav' onClick={() => resetOnLogOut()}> Log Out </button> </NavLink>
            </div>
         </nav> 
     )
 }

NavBar.propTypes = {
    userName: PropTypes.string, 
    userQuote: PropTypes.string, 
    userRank: PropTypes.string, 
    favCount: PropTypes.number, 
    resetOnLogOut: PropTypes.func
}

export default NavBar;