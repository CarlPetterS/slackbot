
import {
    GET_USERS,
    SWITCH_CARD,
    SEND,
    SAVE_QUESTIONS,
    TOGGLE_USER,
    TOGGLE_ALL_USERS,
    SELECT_USER,
    TOGGLE_DAY_REPEAT,
    SELECT_REPEAT_EVERY,
    SELECT_REPEATS,
    SELECT_TIME,
    SAVE_TOKEN,
    SAVE_CODE,
    cards
} from '../actions/actions'

const initialState = {
    code: null,
    token: null,
    users: [],
    allSelected: true,
    timeZoneOffset: new Date().getTimezoneOffset(),
    currentCard: cards.PICK_QUESTIONS,
    questions: ["What's going great?", "What could be better?", "How can I help?"],
    schedule: {
        time: "13:00",
        repeats: "weekly",
        repeat_every: 1,
        repeat_on: {
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: true,
            sat: false
        }
    }
}

export default function onBoarding(state = initialState, action) {
    switch(action.type) {

        case GET_USERS:
          console.log(action.rawUsers)
          const users = action.rawUsers
            .filter(user => !user.is_bot)
            .map(user => Object.assign(user,{ selected: true }))
          state.users = [].concat(users)
          return Object.assign({}, state)

        case SWITCH_CARD:
          state.currentCard = action.card
          return Object.assign({}, state)

        case SAVE_QUESTIONS:
          state.questions = [].concat(action.questions)
          return Object.assign({}, state)

        case SEND:
          fetch('/api/newmessage', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
          }).then(() => console.log("data sent!"))
            .catch(e => console.error(e))
          return state

        case TOGGLE_USER:
          const newUsers = [].concat(state.users)
          newUsers[action.index].selected = !newUsers[action.index].selected
          const allSelected = newUsers.every((user) => user.selected)
          const stateToggled = Object.assign(state,{ users: newUsers},{ allSelected: allSelected })
          return Object.assign({}, stateToggled)

        case TOGGLE_ALL_USERS:
          const newAllSelected = !state.allSelected
          const toggleAllUsers = state.users.map(user => Object.assign(user, { selected: newAllSelected }))
          const stateAllUsersToggled = Object.assign(state, {users: toggleAllUsers},{ allSelected: newAllSelected })
          return Object.assign({}, stateAllUsersToggled)

        case SELECT_USER:
          const newSelectUsers = [].concat(state.users)
          newSelectUsers[action.index].selected = true
          const allSelectedSelect = newSelectUsers.every((user) => user.selected)
          const stateSelectedUser = Object.assign(state,{ users: newSelectUsers},{ allSelected: allSelectedSelect })
          return Object.assign({}, stateSelectedUser)

        case TOGGLE_DAY_REPEAT:
          const newDayRepeatSchedule = Object.assign(state.schedule)
          newDayRepeatSchedule.repeat_on[action.day] = !newDayRepeatSchedule.repeat_on[action.day]
          const stateToggledDayRepeat = Object.assign(state, { schedule: newDayRepeatSchedule })
          return Object.assign({}, stateToggledDayRepeat)

        case SELECT_REPEAT_EVERY:
          const newRepeatEverySchedule = Object.assign(state.schedule)
          newRepeatEverySchedule.repeat_every = action.value
          const stateSelectedRepeatEvery = Object.assign(state, { schedule: newRepeatEverySchedule })
          return Object.assign({}, stateSelectedRepeatEvery)

        case SELECT_REPEATS:
          const newSelectRepeatsSchedule = Object.assign(state.schedule)
          newSelectRepeatsSchedule.repeats = action.interval
          const stateSelectedRepeated = Object.assign(state,{ schedule: newSelectRepeatsSchedule})
          return Object.assign({}, stateSelectedRepeated)

        case SELECT_TIME:
          const newSelectTimeSchedule = Object.assign( state.schedule )
          newSelectTimeSchedule.time = action.time
          const stateSelectedTime = Object.assign(state, {schedule: newSelectTimeSchedule})
          return Object.assign({}, stateSelectedTime)
        
        case SAVE_CODE:
          const stateSavedCode = Object.assign(state, {token: action.code })
          return Object.assign({}, stateSavedCode)
        
        case SAVE_TOKEN:
          console.log(action.token)
          const stateSavedToken = Object.assign(state,{ token: action.token })
          return Object.assign({}, stateSavedToken)

        default:
          return state
    }
}
