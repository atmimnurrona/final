import axios from "../api";
import {
    CHANGE_PASSWORD_USER,
    CHANGE_PASSWORD_USER_FAILURE,
    CHANGE_PASSWORD_USER_SUCCESS
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects";

function* changePasswordSaga(action) {
    let password = action.password;
    let method = 'PATCH', url = '/users/password';

    let result = yield axios({
        url: url,
        method: method,
        data: password
    })
        .then( data => {
            return {
                type: CHANGE_PASSWORD_USER_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: CHANGE_PASSWORD_USER_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchChangePassword() {
    yield takeLatest(CHANGE_PASSWORD_USER, changePasswordSaga)
}