import React from 'react'
import { connect } from 'react-redux'

import { Card } from '../containers/card'
import { switchCard, addQuestion, cards } from '../actions/actions'

const PickQuestionsDummy = ({ questions, addQuestion, gotoSelectUsers }) => (
    <Card title="Choose which questions to ask your team members." 
          instructions="Pick Questions:" 
          progress={require("../images/progress_1.png")}>
        <ul>
            {questions.map((question, index) => (
                <li key={index}><input type="text" name={"question_"+index} value={question} /><br /></li>
            ))}
        </ul>
        <a onClick={addQuestion}>+ Add more questions (optional)...</a>
        <a onClick={gotoSelectUsers}>Select Team Members</a>
    </Card>
)

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addQuestion: () => dispatch(addQuestion()),
        gotoSelectUsers: () => dispatch(switchCard(cards.SELECT_USERS))
    }
}

export const PickQuestions = connect(mapStateToProps,mapDispatchToProps)(PickQuestionsDummy)