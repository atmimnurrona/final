import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    FIND_ALL_ROLE,
    FIND_ALL_ROLE_FAILURE,
    FIND_ALL_ROLE_SUCCESS,
    FIND_ROLE_BY_ID,
    FIND_ROLE_BY_ID_FAILURE,
    FIND_ROLE_BY_ID_SUCCESS,
    REMOVE_ROLE_BY_ID,
    REMOVE_ROLE_BY_ID_FAILURE,
    REMOVE_ROLE_BY_ID_SUCCESS,
    SAVE_ROLE,
    SAVE_ROLE_FAILURE,
    SAVE_ROLE_SUCCESS,
    UPDATE_ROLE_BY_ID,
    UPDATE_ROLE_BY_ID_SUCCESS
} from "../constants/actions";


function* findAllRoleSaga() {

    let result = yield axios.get('/role')
        .then(data => {
            return ({
                type: FIND_ALL_ROLE_SUCCESS,
                data: data,

            })
        })
        .catch(error => {
            return ({
                type: FIND_ALL_ROLE_FAILURE,
                error: error
            })
        })
    yield put(result)
}

function* saveRoleSaga(action) {
    let model = action.model;
    let method = 'POST', url = '/role';

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return {
                type: SAVE_ROLE_SUCCESS,
                data: data
            }
        })
        .catch(error => {
            return {
                type: SAVE_ROLE_FAILURE,
                error: error
            }
        })
    yield put(result)
}

function* findRoleByIdSaga(action) {
    console.log("SAGA ID", action)
    let result = yield axios.get(`/role/${action.id}`)
        .then(data => {
            // console.log("DATA", data)
            return ({
                type: FIND_ROLE_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(e => {
            return ({
                type: FIND_ROLE_BY_ID_FAILURE,
                error: e
            })
        })
    yield put(result)
}

function* removeRoleById(action) {
    let result = yield axios.delete(`/role/${action.id}`)
        .then(data => {
            console.log("ini action", data)
            return ({
                type: REMOVE_ROLE_BY_ID_SUCCESS,
                data: data
            })
        })
        .catch(err => {
            return ({
                type: REMOVE_ROLE_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

function* updateRoleSaga(action) {
    const url = `/role/${action.id}`
    console.log("saga update", action.id)
    const method = 'PUT'
    const model = action.payload

    let result = yield axios({
        url: url,
        method: method,
        data: model
    })
        .then(data => {
            return ({
                type: UPDATE_ROLE_BY_ID_SUCCESS,
                data: result
            })
        })
        .catch(err => {
            return ({
                type: FIND_ROLE_BY_ID_FAILURE,
                error: err
            })
        })
    yield put(result)
}

export function* watchFindAllRole() {
    yield takeLatest(FIND_ALL_ROLE, findAllRoleSaga)
}

export function* watchSaveRole() {
    yield takeLatest(SAVE_ROLE, saveRoleSaga)
}

export function* watchFindByIdRole() {
    yield takeLatest(FIND_ROLE_BY_ID, findRoleByIdSaga)
}

export function* watchRemoveRoleById() {
    yield takeLatest(REMOVE_ROLE_BY_ID, removeRoleById)
}

export function* watchUpdateRoleById() {
    yield takeLatest(UPDATE_ROLE_BY_ID, updateRoleSaga)
}
