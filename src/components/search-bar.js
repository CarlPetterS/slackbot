import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectUser } from '../actions/actions'

class SearchBarDummy extends Component {

  constructor(props) {
    super(props)

    const { users } = this.props
    const userList = users.map(user => user.name + ", " + user.user_name)
    console.log(userList)
    this.state = {
      userList: userList,
      suggestions: [],
      searchVal: ""
    }

    this.handleChange          = this.handleChange.bind(this)
    this.handleFocus           = this.handleFocus.bind(this)
    this.handleBlur            = this.handleBlur.bind(this)
    this.filterSuggestions     = this.filterSuggestions.bind(this)
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this)
  }

  handleChange(event) {

    const searchVal = event.target.value

    this.setState({
      searchVal: searchVal
    })
    this.filterSuggestions(searchVal)
  }

  handleFocus() {
    this.filterSuggestions(this.state.searchVal)
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({
        suggestions: []
      })
    }, 300)
  }

  filterSuggestions(searchVal) {
    if (searchVal === "") {
      this.setState({
        suggestions: []
      })
    } else {
      const suggestions = this.state.userList
        .filter(user => user.toLowerCase().includes(searchVal.toLowerCase()))

      this.setState({
        suggestions: suggestions
      })
    }
  }

  handleSuggestionClick(suggestion) {
    const index = this.state.userList.indexOf(suggestion)
    if (index === -1) {
      console.log("Error! suggestion not part of users list, suggestion: ", suggestion)
    } else {
      this.props.selectUser(index)
    }
  }

  render() {
    return (
      <div>
        <input type="text"
               className="searchbar"
               placeholder="Search company users..."
               value={this.state.searchVal}
               onChange={this.handleChange}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur} />
        <ul>
          {this.state.suggestions.map((suggestion, index) =>
            <li key={index} onClick={() => this.handleSuggestionClick(suggestion)}>{suggestion}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectUser: (index) => dispatch(selectUser(index))
  }
}

export const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarDummy)
