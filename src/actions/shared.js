import { getInitialData, getInitialDataAfterLogin } from "../utils/api"
import { receiveQuestions } from "./questions"
import { receiveUsers } from './users'
import { showLoading, hideLoading } from "react-redux-loading-bar"

export function handleInitialData(dispatch) {
    dispatch(showLoading());

    return getInitialData().then(({ users }) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
    });
}

export async function handleInitialDataAfterLogin(dispatch) {
    dispatch(showLoading());

    return await getInitialDataAfterLogin().then(({ questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
    });
}