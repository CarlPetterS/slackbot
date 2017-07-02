export const SWITCH_CARD = "SWITCH_CARD"
export const SEND = "SEND"
export const SAVE_QUESTIONS = "SAVE_QUESTIONS"
export const TOGGLE_USER = "TOGGLE_USER"
export const TOGGLE_ALL_USERS = "TOGGLE_ALL_USERS"
export const TOGGLE_DAY_REPEAT = "TOGGLE_DAY_REPEAT"
export const SELECT_REPEAT_EVERY = "SELECT_REPEAT_EVERY"
export const SELECT_REPEATS = "SELECT_REPEATS"
export const SELECT_TIME = "SELECT_TIME"

export const cards = { 
    PICK_QUESTIONS: "PICK_QUESTIONS", 
    SELECT_USERS: "SELECT_USERS", 
    SCHEDULE_TIME: "SCHEDULE_TIME", 
    REVIEW: "REVIEW" 
}

export function switchCard(card) {
    return { type: SWITCH_CARD, card }
}

export function saveQuestions(questions) {
    return { type: SAVE_QUESTIONS, questions }
}

export function send() {
    return { type: SEND }
}

export function toggleUser(index) {
    return { type: TOGGLE_USER, index }
}

export function toggleAllUsers() {
    return { type: TOGGLE_ALL_USERS }
}

export function toggleDayRepeat(day) {
    return { type: TOGGLE_DAY_REPEAT, day }
}

export function selectRepeatEvery(value) {
    return { type: SELECT_REPEAT_EVERY, value }
}

export function selectRepeats(interval) {
    return { type: SELECT_REPEATS, interval }
}

export function selectTime(time) {
    return { type: SELECT_TIME, time }
}