import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/movies/popular">Popular Movies</NavLink>
        </li>
        <li>
          <NavLink to="/movies/upcoming">Upcoming Movies</NavLink>
        </li>
        <li>
          <NavLink to="/movies/now_playing">Now Playing</NavLink>
        </li>
      </ul>
    </nav>
  );
};
