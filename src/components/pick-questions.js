import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from '../containers/card'
import { switchCard, cards, saveQuestions } from '../actions/actions'

class PickQuestionsDummy extends Component {

    constructor(props) {
        super(props)

        const { questions } = props
        // To avoid changing entire redux state app on change of questions,
        // we use react state for this component.
        this.state          = { questions: questions };
        this.handleChange   = this.handleChange.bind(this)
        this.handleFocus    = this.handleFocus.bind(this)
        this.removeQuestion = this.removeQuestion.bind(this)
        this.addQuestion    = this.addQuestion.bind(this)
    }

    handleChange(index, event) {
        const questions  = [].concat(this.state.questions)
        questions[index] = event.target.value

        this.setState({ questions: questions })
    }

    handleFocus(event) {
        event.target.select()
    }

    addQuestion() {
        const addedQuestions = [].concat(this.state.questions, "Type in new question...")
        
        this.setState({ questions: addedQuestions })
    }

    removeQuestion(index) {
        const removedQuestions = this.state.questions
            .filter((_, thisIndex) => index !== thisIndex)

        this.setState({ questions: removedQuestions })
    }

    render() {
        const { saveQuestions, gotoSelectUsers } = this.props

        return (
            <Card title="Choose which questions to ask your team members."
                instructions="Pick Questions:"
                progress={require("../images/progress_1.png")}>
              <form>
                <ul>
                  {this.state.questions.map((question, index) => (
                      <li key={index} className="pickquestions__list_item">
                          <input className="pickquestions__input" type="text" name={"question_" + index} 
                                 value={question} 
                                 onChange={this.handleChange.bind(this, index)}
                                 onFocus={this.handleFocus}
                          />
                          <span className="pickquestions__remove fa fa-times"
                                onClick={this.removeQuestion.bind(this, index)} />
                      </li>
                  ))}
                </ul>
              </form>
              <a className="pickquestions__addmore" 
                 onClick={this.addQuestion}>+ Add more questions (optional)...</a>
              <a onClick={() => { saveQuestions(this.state.questions); gotoSelectUsers() }} 
                 className="button button-next button-large button-pickquestions">Select Team Members
                <span className="fa fa-chevron-right"></span>
              </a>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        gotoSelectUsers: ()          => dispatch(switchCard(cards.SELECT_USERS)),
        saveQuestions:   (questions) => dispatch(saveQuestions(questions))
    }
}

export const PickQuestions = connect(mapStateToProps, mapDispatchToProps)(PickQuestionsDummy)