import { getInitialData, getInitialDataAfterLogin } from "../utils/api"
import { receiveQuestions } from "./questions"
import { receiveUsers } from './users'
import { showLoading, hideLoading } from "react-redux-loading-bar"

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());

        return getInitialData().then(({ users }) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
}

export function handleInitialDataAfterLogin() {
    return (dispatch, getState) => {
        if (getState().authedUser) {
            dispatch(showLoading());

            return getInitialDataAfterLogin().then(({ questions }) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
        }
    }
}