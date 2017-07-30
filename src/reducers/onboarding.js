import {
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

const rawUsers = JSON.parse('[{"id":"U4BKGQUKT","name":"GoodTalk","user_name":"goodtalk","time_zone":null,"time_zone_offset":-25200,"is_bot":true,"image":"https://avatars.slack-edge.com/2017-03-01/149032288135_1bd39e528b8eb6a70c4a_48.png"},{"id":"U4EE012KZ","name":"Carl Petter","user_name":"karlpet","time_zone":"Europe/Amsterdam","time_zone_offset":7200,"is_bot":false,"image":"https://secure.gravatar.com/avatar/6e5beb4ac88c9847551faeb2ec8b2710.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0013-48.png"},{"id":"U494C3EQL","user_name":"message_super_server","is_bot":true,"image":"https://secure.gravatar.com/avatar/d0988d1c34310234c5697bef0bb066ce.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0007-48.png"},{"id":"U4874S9PW","name":"Oskar Råhlén","user_name":"oskar","time_zone":"Europe/Amsterdam","time_zone_offset":7200,"is_bot":false,"image":"https://secure.gravatar.com/avatar/b60cdbaca507e730a880372eb601816a.jpg?s=48&d=https%3A%2F%2Fa.slack-edge.com%2F66f9%2Fimg%2Favatars%2Fava_0004-48.png"},{"id":"USLACKBOT","name":"slackbot","user_name":"slackbot","time_zone":null,"time_zone_offset":-25200,"is_bot":false,"image":"https://a.slack-edge.com/2fac/plugins/slackbot/assets/service_48.png"}]')

const users = rawUsers
  .filter(user => !user.is_bot)
  .map(user => Object.assign({},user,{ selected: true }))

const initialState = {
    code: null,
    token: null,
    users: users,
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
