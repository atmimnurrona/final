import axios from "../api";
import {
    FIND_ACCOUNT_BY_ID,
    FIND_ACCOUNT_BY_ID_FAILURE,
    FIND_ACCOUNT_BY_ID_SUCCESS,
    FIND_ALL_ACCOUNT,
    FIND_ALL_ACCOUNT_FAILURE,
    FIND_ALL_ACCOUNT_SUCCESS,
    REMOVE_ACCOUNT_BY_ID,
    REMOVE_ACCOUNT_BY_ID_FAILURE,
    REMOVE_ACCOUNT_BY_ID_SUCCESS,
    SAVE_ACCOUNT,
    SAVE_ACCOUNT_FAILURE,
    SAVE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT, UPDATE_CUSTOMER
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects"

function* findAllAccountSaga() {
    let result = yield axios.get("/master")
        .then(data => {
            return ({
                type: FIND_ALL_ACCOUNT_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: FIND_ALL_ACCOUNT_FAILURE,
                error: err
            })
        })
    yield put(result)
}


function* saveAccountSaga(action) {
    let model = action.model;
    let method = 'POST', url = '/master/signup';
    if (model.id) {
        method = "PATCH";
        url = `/master/${model.id}`
    }

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_ACCOUNT_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_ACCOUNT_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* findAccountByIdSaga(action) {
    console.log("SAGA ID", action)
    let result = yield axios.get(`/master/${action.id}`)
        .then(data => {
            console.log("DATA", data)
            return ({
                type: FIND_ACCOUNT_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(e => {
            return ({
                type: FIND_ACCOUNT_BY_ID_FAILURE,
                error: e
            })
        })
    yield put(result)
}

function* updateAccountSaga(action) {
    let result = false

    yield put({
        type: UPDATE_ACCOUNT,
        data: result
    })
}

function* removeAccountById(action) {
    let result = yield axios.delete(`/master/${action.id}`)
        .then(data => {
            console.log("ini action", data)
            return ({
                type: REMOVE_ACCOUNT_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_ACCOUNT_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

export function* watchFindAllAccount() {
    yield takeLatest(FIND_ALL_ACCOUNT, findAllAccountSaga)
}

export function* watchSaveAccount() {
    yield takeLatest(SAVE_ACCOUNT, saveAccountSaga)
}

export function* watchFindByIdAccount() {
    yield takeLatest(FIND_ACCOUNT_BY_ID, findAccountByIdSaga)
}

export function* watchUpdateAccountById() {
    yield takeLatest(UPDATE_ACCOUNT, updateAccountSaga)
}

export function* watchRemoveById() {
    yield takeLatest(REMOVE_ACCOUNT_BY_ID, removeAccountById)
}