import React from 'react'
import { connect } from 'react-redux'

import {
    switchCard,
    cards,
    toggleUser,
    toggleAllUsers
} from '../actions/actions'

import { Card } from '../containers/card'
import { SearchBar } from './search-bar'

export const SelectUsersDummy = ({ gotoScheduleTime, backToPickQuestions, users, toggleUser, toggleAllUsers, allSelected}) => (
    <Card title="Select team members to check-in with."
        instructions="Select Users:"
        progress={require("../images/progress_1.png")}>
        <SearchBar />
        <input type="checkbox" onChange={toggleAllUsers} checked={allSelected} />Select All<br />
        <ul>
            {users.map((user, index) => (
                <li key={index}><input type='checkbox' onChange={toggleUser.bind(this, index)} checked={user.selected} /><img src={user.image} alt="" /> {user.name}, {user.user_name}</li>
            ))}
        </ul>
        <a onClick={gotoScheduleTime}>Schedule Time</a>
        <a onClick={backToPickQuestions}>Back</a>
    </Card>
)

const mapStateToProps = state => {
    return {
        allSelected: state.allSelected,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleUser: (index) => dispatch(toggleUser(index)),
        toggleAllUsers: () => dispatch(toggleAllUsers()),
        backToPickQuestions: () => dispatch(switchCard(cards.PICK_QUESTIONS)),
        gotoScheduleTime: () => dispatch(switchCard(cards.SCHEDULE_TIME))
    }
}

export const SelectUsers = connect(mapStateToProps, mapDispatchToProps)(SelectUsersDummy)
