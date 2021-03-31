import {
    FIND_NEEDTYPE_BY_ID,
    FIND_ALL_NEEDTYPE,
    FIND_ALL_NEEDTYPE_FAILURE,
    FIND_ALL_NEEDTYPE_SUCCESS,
    REMOVE_NEEDTYPE_BY_ID,
    REMOVE_NEEDTYPE_BY_ID_FAILURE,
    REMOVE_NEEDTYPE_BY_ID_SUCCESS,
    SAVE_NEEDTYPE,
    SAVE_NEEDTYPE_FAILURE,
    SAVE_NEEDTYPE_SUCCESS,
    UPDATE_NEEDTYPE,
    FIND_NEEDTYPE_BY_ID_SUCCESS,
    FIND_NEEDTYPE_BY_ID_FAILURE, UPDATE_NEEDTYPE_SUCCESS
} from "../constants/actions";
import {put, takeLatest} from "redux-saga/effects"
import axios from "axios";
import pagination from "./pagination";

function* findAllNeedSaga() {

    let result = yield axios.get('/need')
        .then(data => {
            return ({
                type: FIND_ALL_NEEDTYPE_SUCCESS,
                data: data,

            })
            console.log("saga ni", data.size)
        })
        .catch(err => {
            return ({
                type: FIND_ALL_NEEDTYPE_FAILURE,
                error: err
            })
        })
    yield put(result)
}


function* saveNeedSaga(action) {
    let model = action.model;
    let method = 'POST', url = '/need';

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_NEEDTYPE_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return {
                type: SAVE_NEEDTYPE_FAILURE,
                error: e
            }
        })
    yield put(result)
}


function* findNeedByIdSaga(action) {
    // console.log("SAGA ID", action)
    let result = yield axios.get(`/need/${action.id}`)
        .then(data => {
            // console.log("DATA", data)
            return ({
                type: FIND_NEEDTYPE_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(e => {
            return ({
                type: FIND_NEEDTYPE_BY_ID_FAILURE,
                error: e
            })
        })
    yield put(result)
}

// function* updateNeedSaga(action) {
//     let result = false
//
//     yield put({
//         type: UPDATE_NEEDTYPE,
//         data: result
//     })
// }

function* updateNeedSaga(action) {
    const url = `/need/${action.id}`
    const method = 'PUT'
    const model = action.payload

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return ({
                type: UPDATE_NEEDTYPE_SUCCESS,
                data: result
            })
        })
        .catch(err => {
            return ({
                type: FIND_NEEDTYPE_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* removeNeedById(action) {
    let result = yield axios.delete(`/need/${action.id}`)
        .then(data => {
            console.log("ini action", data)
            return ({
                type: REMOVE_NEEDTYPE_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_NEEDTYPE_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}


export function* watchFindAllNeed() {
    yield takeLatest(FIND_ALL_NEEDTYPE, findAllNeedSaga)
}

export function* watchSaveNeed() {
    yield takeLatest(SAVE_NEEDTYPE, saveNeedSaga)
}

export function* watchFindByIdNeed() {
    yield takeLatest(FIND_NEEDTYPE_BY_ID, findNeedByIdSaga)
}

export function* watchUpdateNeedById() {
    yield takeLatest(UPDATE_NEEDTYPE, updateNeedSaga)
}

export function* watchRemoveNeedById() {
    yield takeLatest(REMOVE_NEEDTYPE_BY_ID, removeNeedById)
}