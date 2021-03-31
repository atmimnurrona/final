import {put, takeLatest} from "redux-saga/effects";
import axios from "../api";
import {
    FIND_ALL_APPROVAL,
    FIND_ALL_APPROVAL_FAILURE,
    FIND_ALL_APPROVAL_SUCCESS,
    FIND_APPROVAL_BY_ID,
    FIND_APPROVAL_BY_ID_FAILURE,
    FIND_APPROVAL_BY_ID_SUCCESS,
    FIND_APPROVAL_SUBMITTER_BY_ID,
    FIND_APPROVAL_SUBMITTER_BY_ID_FAILURE,
    FIND_APPROVAL_SUBMITTER_BY_ID_SUCCESS,
    SAVE_APPROVAL,
    SAVE_APPROVAL_FAILURE,
    SAVE_APPROVAL_SUCCESS
} from "../constants/actions";
import pagination from "./pagination";

function* saveApprovalSaga(action) {
    console.log("ACTION", action.model.id)
    console.log("ACTION", action.model.approve)
    let model = action.model.approve
    let method = 'PATCH', url = `/approval/${action.model.id}`
    console.log("INI ACTION", action)

    let result = yield axios ({
        url: url,
        method: method,
        data: model,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(data => {
            return{
                type: SAVE_APPROVAL_SUCCESS,
                data: data
            }
        })
        .catch(e => {
            return{
                type: SAVE_APPROVAL_FAILURE,
                error: e
            }
        })
    yield put(result)
}
//benerin yg ini
function* findApprovalByIdSaga(action) {
    let result = yield axios.get(`/approval/${action.id}`)
        .then(data => {
            console.log("ini find by id saga", data)
            return ({
                type: FIND_APPROVAL_BY_ID_SUCCESS,
                data: data

            })
        })
        .catch(err => {
            return ({
                type: FIND_APPROVAL_BY_ID_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* findApprovalSubmitterByIdSaga(action) {
    let result = yield axios.get(`/approval/principal/${action.id}`)
        .then(data => {
            console.log("ini find by id saga", data)
            return ({
                type: FIND_APPROVAL_SUBMITTER_BY_ID_SUCCESS,
                data: data

            })
        })
        .catch(err => {
            return ({
                type: FIND_APPROVAL_SUBMITTER_BY_ID_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* findAllApprovalSaga(data) {

    let parameter = pagination(data)

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/approval/waiting?${parameter}`)
        .then (data => {
            return ({
                type : FIND_ALL_APPROVAL_SUCCESS,
                data: data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                }
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_APPROVAL_FAILURE,
                error: err
            })
        })
    yield put(result)
}

export function* watchSaveApproval() {
    yield takeLatest(SAVE_APPROVAL, saveApprovalSaga)
}

export function* watchFindAllApproval() {
    yield takeLatest(FIND_ALL_APPROVAL, findAllApprovalSaga)
}

export function* watchFindApprovalById() {
    yield takeLatest (FIND_APPROVAL_BY_ID, findApprovalByIdSaga)
}

export function* watchFindApprovalSubmitterByIdSaga() {
    yield takeLatest (FIND_APPROVAL_SUBMITTER_BY_ID, findApprovalSubmitterByIdSaga)
}