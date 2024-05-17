import { setAuthedUser } from "./authedUser";

export function actionLogin(id) {
    return (dispatch) => {
        dispatch(setAuthedUser(id))
    };
}