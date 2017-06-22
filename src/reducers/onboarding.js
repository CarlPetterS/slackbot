import { SWITCH_CARD, SEND, ADD_QUESTION, cards } from '../actions/actions'

const initialState = {
    currentCard: cards.PICK_QUESTIONS, 
    questions: ["What's going great?", "What could be better?", "How can I help?"],
    selectedMembers: [],
    schedule: {
        time: "1pm",
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
          return { ...state, ...{ currentCard: action.card } }
        case ADD_QUESTION:
          return { ...state, ...{ questions: [].concat(state.questions, "Type in new question...") } }
        case SEND:
          console.log("sending data!")
          return state;
        default: 
          return state;
    }
}