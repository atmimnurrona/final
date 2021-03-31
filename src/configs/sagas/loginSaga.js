import axios from "../api";
import {
    LOGIN_FAILURE, LOGIN_REQUEST,
    LOGIN_SUCCESS
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects";


function* LoginRequestSaga(action) {
    let model = action.model
    let method = 'POST', url = '/auth/login';

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: LOGIN_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: LOGIN_FAILURE,
                error: e
            }
        })
    yield put(result)
}

export function* watchLoginSaga() {
    yield takeLatest(LOGIN_REQUEST, LoginRequestSaga)
}