import React from 'react'

export const Header = () => (
  <div className="header">
    <div className="burger-container">
            <div id="menu_icon"><span></span></div>
    </div>
    <a href=""><img className="header__logo" src={require("../images/logo.png")} alt="Speakup Check-in logo" /></a>
    <ul className="header__navbar">
      <li>Products</li>
      <li>Sign Up Free</li>
    </ul>
  </div>
)