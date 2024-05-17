import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData() {
  return _getUsers().then((users) => ({
    users,
  }))
}

export function getInitialDataAfterLogin() {
  return _getQuestions().then((questions) => ({
    questions,
  }))
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}