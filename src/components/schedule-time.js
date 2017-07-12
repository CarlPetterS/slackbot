import React from 'react'
import { connect } from 'react-redux'

import { switchCard, cards, toggleDayRepeat, selectRepeatEvery, selectRepeats, selectTime } from '../actions/actions'
import { Card } from '../containers/card'

export const ScheduleTimeDummy = ({ 
    backToSelectUsers, 
    gotoReview, 
    schedule, 
    toggleDayRepeat, 
    selectRepeatEvery, 
    selectRepeats,
    selectTime
}) => (
    <Card title="When do you want to check-in with your team members?"
        instructions="Schedule Time:"
        progress={require("../images/progress_3.png")}>

        <h4>Time of day</h4>
        <input type="time" value={schedule.time} onChange={(event) => selectTime(event.target.value)} />
        <h4>Repeats</h4>
        <select value={schedule.repeats} onChange={(event) => selectRepeats(event.target.value)}>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
        </select>
        <h4>Repeat every</h4>
        <select value={schedule.repeat_every} onChange={(event) => selectRepeatEvery(event.target.value)}>
            {Array.apply(null, Array(30)).map((_,i) => 
                <option key={i} value={i+1}>{i+1}</option>
            )}
        </select>{schedule.repeats.substring(0, schedule.repeats.length - 2) + (schedule.repeat_every > 1 ? "s" : "")}
        <h4>Repeat on</h4>
        <input type="checkbox" checked={schedule.repeat_on.sun} value={schedule.repeat_on.sun} onChange={() => toggleDayRepeat('sun')}/>S
        <input type="checkbox" checked={schedule.repeat_on.mon} value={schedule.repeat_on.mon} onChange={() => toggleDayRepeat('mon')}/>M
        <input type="checkbox" checked={schedule.repeat_on.tue} value={schedule.repeat_on.tue} onChange={() => toggleDayRepeat('tue')}/>T
        <input type="checkbox" checked={schedule.repeat_on.wed} value={schedule.repeat_on.wed} onChange={() => toggleDayRepeat('wed')}/>W
        <input type="checkbox" checked={schedule.repeat_on.thu} value={schedule.repeat_on.thu} onChange={() => toggleDayRepeat('thu')}/>T
        <input type="checkbox" checked={schedule.repeat_on.fri} value={schedule.repeat_on.fri} onChange={() => toggleDayRepeat('fri')}/>F
        <input type="checkbox" checked={schedule.repeat_on.sat} value={schedule.repeat_on.sat} onChange={() => toggleDayRepeat('sat')}/>S
        <h4><strong>Summary</strong></h4>
        <a className="button button-next button-shared"onClick={gotoReview}>Review</a>
        <a className="button button-back button-shared-back" onClick={backToSelectUsers}>Back</a>
    </Card>
)

const mapStateToProps = state => {
    return {
        schedule: state.schedule
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectTime: (time) => dispatch(selectTime(time)),
        selectRepeats: (interval) => dispatch(selectRepeats(interval)),
        selectRepeatEvery: (value) => dispatch(selectRepeatEvery(value)),
        toggleDayRepeat: (day) => dispatch(toggleDayRepeat(day)),
        backToSelectUsers: () => dispatch(switchCard(cards.SELECT_USERS)),
        gotoReview: () => dispatch(switchCard(cards.REVIEW))
    }
}

export const ScheduleTime = connect(mapStateToProps, mapDispatchToProps)(ScheduleTimeDummy)