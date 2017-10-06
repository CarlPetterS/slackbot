import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { cards, switchCard } from '../actions/actions'


const HeaderDummy = ({ resetActiveCardToPickQuestions }) => (
  <div className="header">
    <Link onClick={resetActiveCardToPickQuestions} to='/'>
      <img className="header__logo" src={require("../images/logo.png")} alt="Speakup Check-in logo" />
    </Link>
    <div className="burger-container">
            <div id="menu_icon"><span></span></div>
    </div>
    <ul className="header__navbar">
      <li>Sign In</li>
      <li>Products</li>
      <li>Sign Up Free</li>
    </ul>
  </div>
)


const mapDispatchToProps = dispatch => {
    return {
        resetActiveCardToPickQuestions: () => dispatch(switchCard(cards.PICK_QUESTIONS))
    }
}

export const Header = connect(null,mapDispatchToProps)(HeaderDummy)