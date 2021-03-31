
import {put, takeLatest} from "redux-saga/effects";
import axios from "../api";
import {
    FIND_ALL_TRANSACTION,
    FIND_ALL_TRANSACTION_FAILURE,
    FIND_ALL_TRANSACTION_SUCCESS,
    FIND_TRANSACTION_BY_ID,
    FIND_TRANSACTION_BY_ID_FAILURE,
    FIND_TRANSACTION_BY_ID_SUCCESS,
    FIND_TRANSACTION_BY_STAFF_FAILURE,
    FIND_TRANSACTION_BY_STAFF_SUCCESS,
    SAVE_TRANSACTION,
    SAVE_TRANSACTION_FAILURE,
    SAVE_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION_SUCCESS
} from "../constants/actions";
import pagination from "./pagination";

function* findAllTransactionSaga(data) {
    let parameter = pagination(data)

    // console.log("PARAMETER: ", action)

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/approval/waiting?${parameter}`)
        .then (data => {
            return ({
                type : FIND_ALL_TRANSACTION_SUCCESS,
                data: data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                },
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_TRANSACTION_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* saveTransactionSaga(action) {
    let model = action.model
    let method = 'POST', url = '/transaction';

    let result = yield axios ({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_TRANSACTION_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_TRANSACTION_FAILURE,
                error: e
            }
        })
    yield put(result)
}

function* findTransactionByIdSaga(action) {
    let result = yield axios.get(`/approval/${action.id}`)
        .then(data => {
            console.log("ini saga", data)
            return ({
                type: FIND_TRANSACTION_BY_ID_SUCCESS,
                data: data

            })
        })
        .catch(err => {
            return ({
                type: FIND_TRANSACTION_BY_ID_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* updateTransactionSaga(action) {
    let result = yield axios.get(`/${action.id}/transaction}`)
        .then(data => {
            return({
                type: UPDATE_TRANSACTION_SUCCESS,
                data: result
            })
        })
        .catch(err => {
            return ({
                type: FIND_TRANSACTION_BY_ID_FAILURE,
                error: err
            })
        })
    yield put({
    })
}

function* findTransactionByStaffSaga(action) {
    let parameter = pagination(action)

    // console.log("PARAMETER: ", action)

    parameter = parameter.replace(/\s+/g, '+')
    let result = yield axios.get(`/approval/principal?${parameter}`)
        .then(data => {
            // console.log("saga data", data)

            return ({
                type: FIND_TRANSACTION_BY_STAFF_SUCCESS,
                data: data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                },
            })
        })
        .catch(e => {
            return ({
                type: FIND_TRANSACTION_BY_STAFF_FAILURE,
                error: e
            })
        })
    yield put(result)
}

export function* watchFindAllTransaction() {
    yield takeLatest(FIND_ALL_TRANSACTION, findAllTransactionSaga)
}

export function* watchSaveTransaction() {
    yield takeLatest(SAVE_TRANSACTION, saveTransactionSaga)
}

export function* watchFindTransactionById() {
    yield takeLatest (FIND_TRANSACTION_BY_ID, findTransactionByIdSaga)
}

export function* watchUpdateTransactionById() {
    yield takeLatest (UPDATE_TRANSACTION_SUCCESS, updateTransactionSaga)
}

export function* watchFindAllTransactionByStaff() {
    yield takeLatest (FIND_ALL_TRANSACTION, findTransactionByStaffSaga)
}