export const SWITCH_CARD = "SWITCH_CARD"
export const SEND = "SEND"
export const ADD_QUESTION = "ADD_QUESTION"

export const cards = { 
    PICK_QUESTIONS: "PICK_QUESTIONS", 
    SELECT_USERS: "SELECT_USERS", 
    SCHEDULE_TIME: "SCHEDULE_TIME", 
    REVIEW: "REVIEW" 
}

export function switchCard(card) {
    return { type: SWITCH_CARD, card }
}

export function addQuestion() {
    return { type: ADD_QUESTION }
}

export function send() {
    return { type: SEND }
}
