import React, { Component } from 'react'
import { connect } from 'react-redux'
import fetch from 'node-fetch'

import { cards, saveCode } from '../actions/actions'
import { PickQuestions } from './pick-questions'
import { SelectUsers } from './select-users'
import { ScheduleTime } from './schedule-time'
import { Review } from './review'

class OnboardDummy extends Component {
  constructor(props) {
    super(props)

    const code = new URLSearchParams(props.location.search).get('code')
    if (code === null) {
      console.log("ERROR")
    } else {
      fetch('/api/getToken?code=' + code)
        .then(response => response.json())
        .then(response => fetch('/api/getInformation', {method:post, body: { token:response.token }}))
        .then(response => console.log(response))
    }
  }

  render() {
    const { PICK_QUESTIONS, SELECT_USERS, SCHEDULE_TIME, REVIEW } = cards;

    switch (this.props.currentCard) {
        case PICK_QUESTIONS: return <div className="card__container"><PickQuestions /></div>
        case SELECT_USERS:   return <div className="card__container"><SelectUsers /></div>
        case SCHEDULE_TIME:  return <div className="card__container"><ScheduleTime /></div>
        case REVIEW:         return <div className="card__container"><Review /></div>
        default:             return <div className="card__container"><PickQuestions /></div>
    }
  }
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCode: (code) => dispatch(saveCode(code))
  }
}

export const Onboard = connect(mapStateToProps, mapDispatchToProps)(OnboardDummy)