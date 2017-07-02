import React from 'react'
import { connect } from 'react-redux'

import { switchCard, cards } from '../actions/actions'
import { Card } from '../containers/card'

export const ScheduleTimeDummy = ({ backToSelectUsers, gotoReview }) => (
    <Card title="When do you want to check-in with your team members?" 
          instructions="Schedule Time:" 
          progress={require("../images/progress_1.png")}>
        <form>
            <h4>Time of day</h4><input type="time" value="01:00" />
            
        </form>
        <a onClick={gotoReview}>Review</a>
        <a onClick={backToSelectUsers}>Back</a>
    </Card>
)


const mapDispatchToProps = dispatch => {
    return {
        backToSelectUsers: () => dispatch(switchCard(cards.SELECT_USERS)),
        gotoReview: () => dispatch(switchCard(cards.REVIEW))
    }
}

export const ScheduleTime = connect(null,mapDispatchToProps)(ScheduleTimeDummy)