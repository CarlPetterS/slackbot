import React from 'react'
import { connect } from 'react-redux'

import { send, switchCard, cards } from '../actions/actions'
import { Card } from '../containers/card'

const ReviewDummy = ({ backToScheduleTime, send }) => (
    <Card title="Great! You're already done!" 
          instructions="Review:" 
          progress={require("../images/progress_1.png")}>
        <p>stuff</p>
        <a onClick={backToScheduleTime}>Back</a>
        <a onClick={send}>Finish</a>
    </Card>
)

const mapDispatchToProps = dispatch => {
    return {
        backToScheduleTime: () => dispatch(switchCard(cards.SCHEDULE_TIME)),
        send: () => dispatch(send())
    }
}

export const Review = connect(null,mapDispatchToProps)(ReviewDummy)