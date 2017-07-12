import React from 'react'
import { connect } from 'react-redux'

import { send, switchCard, cards } from '../actions/actions'
import { Card } from '../containers/card'

const ReviewDummy = ({ backToScheduleTime, send, questions, users, schedule }) => {
    
    let usersDisplay = users.reduce((usersString, user) => usersString + user.name + ", ", "")
    usersDisplay = usersDisplay.substring(0, usersDisplay.length - 2)

    return (
    <Card title="Great! You're already done!" 
          instructions="Review:" 
          progress={require("../images/progress_4.png")}>
        <h1>Questions({questions.length}):</h1>
        {questions.map((question, index) => 
          <p key={index}>{question}</p>
        )}
        <h1>Users({users.length}):</h1>
        <p>{usersDisplay}</p>

        <p>Your check-ins will be sent out</p>
        <a className="button button-next button-shared" onClick={send}>Finish</a>
        <a className="button button-back button-shared-back" onClick={backToScheduleTime}>Back</a>
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
        send: () => dispatch(send())
    }
}

export const Review = connect(mapStateToProps,mapDispatchToProps)(ReviewDummy)