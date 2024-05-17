import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER"
export const OPTION_ONE = "optionOne"
export const OPTION_TWO = "optionTwo"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()));
    };
}

function addQuestionAnswer(answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        answer,
    };
}

export function handleAddQuestionAnswer(info) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const infoFinal = {
            authedUser,
            ...info
        };

        dispatch(showLoading());
        return saveQuestionAnswer(infoFinal)
            .then(() => dispatch(addQuestionAnswer(infoFinal)))
            .then(() => dispatch(hideLoading()));
    };
}