import React from 'react'
import { connect } from 'react-redux'

import { switchCard, cards } from '../actions/actions'
import { Card } from '../containers/card'

const users = JSON.parse('[{"id":"U4BKGQUKT","name":"GoodTalk","user_name":"goodtalk","time_zone":null,"time_zone_offset":-25200,"is_bot":true,"image":"https://avatars.slack-edge.com/2017-03-01/149032288135_1bd39e528b8eb6a70c4a_48.png"},{"id":"U4EE012KZ","name":"Carl Petter","user_name":"karlpet","time_zone":"Europe/Amsterdam","time_zone_offset":7200,"is_bot":false,"image":"https://secure.gravatar.com/avatar/6e5beb4ac88c9847551faeb2ec8b2710.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0013-48.png"},{"id":"U494C3EQL","user_name":"message_super_server","is_bot":true,"image":"https://secure.gravatar.com/avatar/d0988d1c34310234c5697bef0bb066ce.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0007-48.png"},{"id":"U4874S9PW","name":"Oskar Råhlén","user_name":"oskar","time_zone":"Europe/Amsterdam","time_zone_offset":7200,"is_bot":false,"image":"https://secure.gravatar.com/avatar/b60cdbaca507e730a880372eb601816a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0004-48.png"},{"id":"USLACKBOT","name":"slackbot","user_name":"slackbot","time_zone":null,"time_zone_offset":-25200,"is_bot":false,"image":"https://a.slack-edge.com/2fac/plugins/slackbot/assets/service_48.png"}]')

export const SelectUsersDummy = ({ backToPickQuestions, gotoScheduleTime }) => (
    <Card title="Select team members to check-in with." 
          instructions="Select Users:" 
          progress={require("../images/progress_1.png")}>
        <form>
            <input type="text" name="search" value="Search company users" /><br />
            <input type="checkbox" />Select All<br />
            <ul>
                {users
                   .filter((user) => !user.is_bot)
                   .map((user, index) => (<li key={index}><input type='checkbox' /><img src={user.image} alt=""/> {user.name}, {user.user_name}</li>
                ))}
            </ul>
            <a onClick={backToPickQuestions}>Back</a>
            <a onClick={gotoScheduleTime}>Schedule Time</a>
        </form>
    </Card>
)

const mapDispatchToProps = dispatch => {
    return {
        backToPickQuestions: () => dispatch(switchCard(cards.PICK_QUESTIONS)),
        gotoScheduleTime: () => dispatch(switchCard(cards.SCHEDULE_TIME))
    }
}

export const SelectUsers = connect(null,mapDispatchToProps)(SelectUsersDummy)