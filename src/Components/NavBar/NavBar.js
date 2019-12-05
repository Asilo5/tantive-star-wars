 import React from 'react';
 import './NavBar.scss';
 import { NavLink } from 'react-router-dom';

 const NavBar = () => {
     return (
         <nav>
             <img src='' alt='' />
            <h2>User Name</h2>
            <h3>Quote</h3>
            <h3>Rank</h3>
            <div>
                <NavLink to='/movies' className='nav' activeClassName='active-nav' >Movies</NavLink>
                <NavLink to='/favourites' className='nav' activeClassName='active-nav' >Favourites</NavLink>
                <NavLink to='/' className='nav' activeClassName='active-nav' >Log Out</NavLink>
            </div>
         </nav>
     )
 }

export default NavBar;