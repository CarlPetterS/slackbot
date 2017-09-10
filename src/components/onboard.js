import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'node-fetch'

import { cards, saveCode, getUsers, saveToken } from '../actions/actions'
import { PickQuestions } from './pick-questions'
import { SelectUsers } from './select-users'
import { ScheduleTime } from './schedule-time'
import { Review } from './review'

class OnboardDummy extends Component {
  constructor(props) {
    super(props)

    this.renderCards = this.renderCards.bind(this)

    let code = new URLSearchParams(props.location.search).get('code')

    if (code === null) {
      console.log("ERROR")
    } else {
      fetch('https://www.speakupcheckin.com/api/getToken?code=' + code)
        .then(response => {console.log(response); return response.json()})
        .then(response => fetch('https://www.speakupcheckin.com/api/getInformation', {method:'POST',body: JSON.stringify(response),
	        headers: { 'Content-Type': 'application/json' }}))
        .then(response => response.json())
        .then(response => {
          props.getUsers(response.users)
          props.saveToken(response.token)
        })
    }
  }

  renderCards() {
    const { PICK_QUESTIONS, SELECT_USERS, SCHEDULE_TIME, REVIEW } = cards;
    switch (this.props.currentCard) {
        case PICK_QUESTIONS: return <div className="card__container"><PickQuestions /></div>
        case SELECT_USERS:   return <div className="card__container"><SelectUsers /></div>
        case SCHEDULE_TIME:  return <div className="card__container"><ScheduleTime /></div>
        case REVIEW:         return <div className="card__container"><Review /></div>
        default:             return <div className="card__container"><PickQuestions /></div>
    }
  }

  render() {
    return (
      this.renderCards()
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCode:  (code)  => dispatch(saveCode(code)),
    getUsers:  (users) => dispatch(getUsers(users)),
    saveToken: (token) => dispatch(saveToken(token))
  }
}

export const Onboard = connect(mapStateToProps, mapDispatchToProps)(OnboardDummy)