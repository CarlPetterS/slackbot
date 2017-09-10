import React from 'react'
import { connect } from 'react-redux'

import { send, switchCard, cards } from '../actions/actions'
import { Card } from '../containers/card'

const ReviewDummy = ({ backToScheduleTime, send, questions, users, schedule }) => {
    
    let usersDisplay = users
      .filter(user=>user.selected)
      .reduce((usersString, user) => usersString + user.name + ", ", "")
    usersDisplay = usersDisplay.substring(0, usersDisplay.length - 2)

    const weekday = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ]

    return (
    <Card title="Great! You're already done!" 
          instructions="Review:" 
          progress={require("../images/progress_4.png")}>
        <h1 className="review__title">Questions({questions.length}):</h1>
        {questions.map((question, index) => 
          <p className="review__content" key={index}>{question}</p>
        )}
        <h1 className="review__title">Users({users.filter(user => user.selected).length}):</h1>
        <p className="review__content">{usersDisplay}</p>

        <p className="review__content review__summary">Your check-ins will be sent out</p>
        <p className="review__content">
            every {(() => {switch(schedule.repeat_every) {
                case 1:  return ''
                case 2:  return '' + schedule.repeat_every + 'nd'
                case 3:  return '' + schedule.repeat_every + 'rd'
                default: return '' + schedule.repeat_every + 'th'
            }})()}
            {' '}
            {schedule.repeats.substring(0,schedule.repeats.length-2)} at 
            {' ' + weekday.filter(day => schedule.repeat_on[day.substring(0,3)]).join(', ')} 
            {' ' + schedule.time} 
             {(() => {
              const split = new Date().toString().split(" ");
              const timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
              return ' ' + timeZoneFormatted
            })()}.
        </p>
        <a className="button button-next button-shared"      onClick={send}>Finish<span className="fa fa-chevron-right"></span></a>
        <a className="button button-back button-shared-back" onClick={backToScheduleTime}><span className="fa fa-chevron-left"></span>Back</a>
    </Card>
)}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        users: state.users,
        schedule: state.schedule
    }
}

const mapDispatchToProps = dispatch => {
    return {
        backToScheduleTime: () => dispatch(switchCard(cards.SCHEDULE_TIME)),
        send:               () => dispatch(send())
    }
}

export const Review = connect(mapStateToProps,mapDispatchToProps)(ReviewDummy)