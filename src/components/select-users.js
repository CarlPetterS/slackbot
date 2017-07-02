import React from 'react'
import { connect } from 'react-redux'
import AutoComplete from 'material-ui/AutoComplete'

import {
    switchCard,
    cards,
    toggleUser,
    toggleAllUsers
} from '../actions/actions'

import { Card } from '../containers/card'
/*
class SelectUsersDummy extends Component {
    
    constructor(props) {
        super(props)

        this.state = { 
            users: props.users.map((user) => { 
                return { ...user, ...{ selected: false }}
            }) 
        }

        this.displayUsers = this.displayUsers.bind(this)
        this.getSearchFilterArray = this.getSearchFilterArray.bind(this)
    }


    displayUsers() {
      const usersToBeDisplayed = this.state.users
          .filter((user) => !user.is_bot)
          .map((user, index) => (<li key={index}><input type='checkbox' /><img src={user.image} alt="" /> {user.name}, {user.user_name}</li>))
      return usersToBeDisplayed
    }

    getSearchFilterArray() {
      const userFilterForSearch = this.state.users
          .filter((user) => !user.is_bot)
          .map((data_item) => [data_item.user_name, data_item.name])
          .reduce((elem, arr) => arr.concat(elem), [])
      return userFilterForSearch
    }

    changeAllSelection() {
        this.setState({
            users: {...this.state.users, ...{ selected: true }}
        })
    }

    changeUserSelection(index) {
        const users = [].concat(this.state.users)
        users[index].selected = !users[index].selected

        this.setState({ users: users })
    }
    
    render() {

        const { backToPickQuestions, gotoScheduleTime } = this.props

        return (
        <Card title="Select team members to check-in with."
            instructions="Select Users:"
            progress={require("../images/progress_1.png")}>
            <form>
                <AutoComplete floatingLabelText="Search company users"
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.getSearchFilterArray()}
                    maxSearchResults={10}
                />
                <input type="checkbox" />Select All<br />
                <ul>
                    {this.displayUsers()}
                </ul>
                <a onClick={gotoScheduleTime}>Schedule Time</a>
                <a onClick={backToPickQuestions}>Back</a>
            </form>
        </Card>
    )
    }
}
*/
export const SelectUsersDummy = ({ gotoScheduleTime, backToPickQuestions, users, toggleUser, toggleAllUsers, allSelected}) => (
    <Card title="Select team members to check-in with."
        instructions="Select Users:"
        progress={require("../images/progress_1.png")}>
        <AutoComplete floatingLabelText="Search company users"
            filter={AutoComplete.fuzzyFilter}
            dataSource={
                users
                    .map((data_item) => [data_item.user_name, data_item.name])
                    .reduce((elem, arr) => arr.concat(elem), [])
            }
            maxSearchResults={10}
        />
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