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
          const users = action.rawUsers
            .filter(user => !user.is_bot)
            .map(user => Object.assign({},user,{ selected: true }))
          return Object.assign({}, state, { users: users })

        case SWITCH_CARD:
          return Object.assign({}, state, { currentCard: action.card})

        case SAVE_QUESTIONS:
          return Object.assign({}, state, { questions: action.questions})

        case SEND:
          console.log("sending data!")
          return state

        case TOGGLE_USER:
          const newUsers = [].concat(state.users)
          newUsers[action.index].selected = !newUsers[action.index].selected
          const allSelected = newUsers.every((user) => user.selected)
          return Object.assign({}, state,{ users: newUsers},{ allSelected: allSelected })

        case TOGGLE_ALL_USERS:
          const newAllSelected = !state.allSelected
          const toggleAllUsers = state.users.map(user => Object.assign({}, user, { selected: newAllSelected }))
          return Object.assign({}, state, {users: toggleAllUsers},{ allSelected: newAllSelected })

        case SELECT_USER:
          const newSelectUsers = [].concat(state.users)
          newSelectUsers[action.index].selected = true
          const allSelectedSelect = newSelectUsers.every((user) => user.selected)
          return Object.assign({}, state,{ users: newSelectUsers},{ allSelected: allSelectedSelect })

        case TOGGLE_DAY_REPEAT:
          const newDayRepeatSchedule = Object.assign(state.schedule)
          newDayRepeatSchedule.repeat_on[action.day] = !newDayRepeatSchedule.repeat_on[action.day]
          return Object.assign({}, state, { schedule: newDayRepeatSchedule })

        case SELECT_REPEAT_EVERY:
          const newRepeatEverySchedule = Object.assign(state.schedule)
          newRepeatEverySchedule.repeat_every = action.value
          return Object.assign({}, state, { schedule: newRepeatEverySchedule })

        case SELECT_REPEATS:
          const newSelectRepeatsSchedule = Object.assign({},state.schedule)
          newSelectRepeatsSchedule.repeats = action.interval
          return Object.assign( {},state,{ schedule: newSelectRepeatsSchedule})

        case SELECT_TIME:
          const newSelectTimeSchedule = Object.assign( state.schedule )
          newSelectTimeSchedule.time = action.time
          return Object.assign({ state, schedule: newSelectTimeSchedule })
        
        case SAVE_CODE:
          return Object.assign({},state, {token: action.code })
        
        case SAVE_TOKEN:
          return Object.assign({ state, token: action.token })

        default:
          return state
    }
}
