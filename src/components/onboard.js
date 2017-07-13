import React from 'react'
import { connect } from 'react-redux'

import { cards } from '../actions/actions'
import { PickQuestions } from './pick-questions'
import { SelectUsers } from './select-users'
import { ScheduleTime } from './schedule-time'
import { Review } from './review'


const OnboardDummy = ({ currentCard }) => {

    const { PICK_QUESTIONS, SELECT_USERS, SCHEDULE_TIME, REVIEW } = cards;

    switch (currentCard) {
        case PICK_QUESTIONS: return <div className="card__container"><PickQuestions /></div>
        case SELECT_USERS:   return <div className="card__container"><SelectUsers /></div>
        case SCHEDULE_TIME:  return <div className="card__container"><ScheduleTime /></div>
        case REVIEW:         return <div className="card__container"><Review /></div>
        default:             return <div className="card__container"><PickQuestions /></div>
    }
}

const mapStateToProps = state => {
  return {
    currentCard: state.currentCard
  }
}

export const Onboard = connect(mapStateToProps)(OnboardDummy)