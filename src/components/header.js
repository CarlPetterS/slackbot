import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => (
  <div className="header">
    <Link to='/'><img className="header__logo" src={require("../images/logo.png")} alt="Speakup Check-in logo" /></Link>
    <div className="burger-container">
            <div id="menu_icon"><span></span></div>
    </div>
    <ul className="header__navbar">
      <li>Products</li>
      <li>Sign Up Free</li>
    </ul>
  </div>
)
