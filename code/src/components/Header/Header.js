import React from 'react';
import './Header.css'

export const Header = () => {
  return (
    <h1 className="header">
    Movies
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons8-clapperboard-50.png`}
        alt="clapperboard icon"
        className="icon-header" />
    </h1>
  )
}