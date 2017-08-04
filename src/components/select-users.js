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
        progress={require("../images/progress_2.png")}>
        <SearchBar />
        <input className="user__selectallcheckbox" type="checkbox" onChange={toggleAllUsers} checked={allSelected} /><a className="user__selectall">Select All</a>
        <ul>
            {users.map((user, index) => (
                <li className="user" key={index}>
                    <input type='checkbox' className="user__select" onChange={toggleUser.bind(this, index)} checked={user.selected} />
                    <img className="user__img" src={user.image} alt="" />
                    <a className="user__name" onClick={toggleUser.bind(this, index)}>{user.name}, <span>{user.user_name}</span></a>
                </li>
            ))}
        </ul>
        <a className="button button-next button-shared" onClick={gotoScheduleTime}>Schedule Checkin</a>
        <a className="button button-back button-shared-back" onClick={backToPickQuestions}>Back</a>
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
