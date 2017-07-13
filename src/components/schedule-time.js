import React from 'react'
import { connect } from 'react-redux'

import { switchCard, cards, toggleDayRepeat, selectRepeatEvery, selectRepeats, selectTime } from '../actions/actions'
import { Card } from '../containers/card'

let weekday = new Array(7);
weekday[0] = "sunday";
weekday[1] = "monday";
weekday[2] = "tuesday";
weekday[3] = "wednesday";
weekday[4] = "thursday";
weekday[5] = "friday";
weekday[6] = "saturday";


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
        <div className="schedule__titles">
        <h4 className="schedule__title">Time of day</h4>
        <h4 className="schedule__title">Repeats</h4>
        <h4 className="schedule__title">Repeat every</h4>
        <h4 className="schedule__title">Repeat on</h4>
        </div>
        <div className="schedule__content">
        <input className="schedule__time" type="time" value={schedule.time} onChange={(event) => selectTime(event.target.value)} />
        <select className="schedule__repeats" value={schedule.repeats} onChange={(event) => selectRepeats(event.target.value)}>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="yearly">yearly</option>
        </select>
        <select className="schedule__repeatevery" 
        value={schedule.repeat_every} onChange={(event) => selectRepeatEvery(event.target.value)}>
            {Array(30).fill(null).map((_,i) => 
                <option key={i} value={(i+1)}>{i+1}</option>
            )}
        </select>
        <p className="schedule__repeatevery--date">{schedule.repeats.substring(0, schedule.repeats.length - 2) + (schedule.repeat_every > 1 ? "s" : "")}</p>
        <div className="schedule__weekdays">
        <input type="checkbox" checked={schedule.repeat_on.sun} value={schedule.repeat_on.sun} onChange={() => toggleDayRepeat('sun')}/>S
        <input type="checkbox" checked={schedule.repeat_on.mon} value={schedule.repeat_on.mon} onChange={() => toggleDayRepeat('mon')}/>M
        <input type="checkbox" checked={schedule.repeat_on.tue} value={schedule.repeat_on.tue} onChange={() => toggleDayRepeat('tue')}/>T
        </div>
        <div className="schedule__weekdays--buttons">
            <a className={schedule.repeat_on['sun'] ? 'weekday weekday--first button-next': 'weekday weekday--first'} onClick={() => toggleDayRepeat('sun')}>Sun</a>
            <a className={schedule.repeat_on['mon'] ? 'weekday button-next': 'weekday'} onClick={() => toggleDayRepeat('mon')}
            >Mon</a>
            <a className={schedule.repeat_on['tue'] ? 'weekday button-next': 'weekday'} onClick={() => toggleDayRepeat('tue')}
            >Tue</a>
        </div>
        </div>
        <div className="schedule__weekdays">
        <input type="checkbox" checked={schedule.repeat_on.wed} value={schedule.repeat_on.wed} onChange={() => toggleDayRepeat('wed')}/>W
        <input type="checkbox" checked={schedule.repeat_on.thu} value={schedule.repeat_on.thu} onChange={() => toggleDayRepeat('thu')}/>T
        <input type="checkbox" checked={schedule.repeat_on.fri} value={schedule.repeat_on.fri} onChange={() => toggleDayRepeat('fri')}/>F
        <input type="checkbox" checked={schedule.repeat_on.sat} value={schedule.repeat_on.sat} onChange={() => toggleDayRepeat('sat')}/>S
        </div>
        <div className="schedule__weekdays--buttons weekdays--extended">
            <a className={schedule.repeat_on['wed'] ? 'weekday weekday--first weekday--margin button-next': 'weekday weekday--first weekday--margin'} onClick={() => toggleDayRepeat('wed')}
            >Wed</a>
            <a className={schedule.repeat_on['thu'] ? 'weekday button-next': 'weekday'} onClick={() => toggleDayRepeat('thu')}
            >Thu</a>
            <a className={schedule.repeat_on['fri'] ? 'weekday button-next': 'weekday'} onClick={() => toggleDayRepeat('fri')}
            >Fri</a>
            <a className={schedule.repeat_on['sat'] ? 'weekday button-next': 'weekday'} onClick={() => toggleDayRepeat('sat')}
            >Sat</a>
        </div>
        <h4 className="schedule__summary"><strong>Summary</strong>  {' ' + schedule.time + ' '} 
            every {schedule.repeats.substring(0,schedule.repeats.length-2)} at 
            {' ' + weekday.filter(day => schedule.repeat_on[day.substring(0,3)]).join(', ')}
             {(() => {
              const split = new Date().toString().split(" ");
              const timeZoneFormatted = split[split.length - 2] + " " + split[split.length - 1];
              return ' ' + timeZoneFormatted
            })()}. </h4>
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