
import axios from "../api";
import {put, takeLatest} from "redux-saga/effects";
import {
    FIND_ALL_REPORT,
    FIND_ALL_REPORT_FAILURE,
    FIND_ALL_REPORT_SUCCESS,
    FIND_REPORT_BY_STAFF,
    FIND_REPORT_BY_STAFF_FAILURE,
    FIND_REPORT_BY_STAFF_SUCCESS,
    FIND_TRANSACTION_BY_STAFF_FAILURE,
    FIND_TRANSACTION_BY_STAFF_SUCCESS
} from "../constants/actions";
import pagination from "./pagination";


function* findAllReportSaga(data) {

    let parameter = pagination(data)

    // console.log("PARAMETER: ", action)

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/report?${parameter}`)
        .then (data => {
            return ({
                type: FIND_ALL_REPORT_SUCCESS,
                data : data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                }
            })
        })
        .catch(err => {
            return({
                type: FIND_ALL_REPORT_FAILURE,
                error: err
            })
        })
    yield put (result)
}

function* findReportByStaffSaga(action) {
    let parameter = pagination(action)

    // console.log("PARAMETER: ", action)

    parameter = parameter.replace(/\s+/g, '+')

    let result = yield axios.get(`/report/principal?${parameter}`)
        .then(data => {
            return ({
                type: FIND_REPORT_BY_STAFF_SUCCESS,
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
                type: FIND_REPORT_BY_STAFF_FAILURE,
                error: e
            })
        })
    yield put(result)
}

export function* watchFindAllReport() {
    yield takeLatest (FIND_ALL_REPORT, findAllReportSaga)
}

export function* watchFindReportByStaff() {
    yield takeLatest (FIND_ALL_REPORT, findReportByStaffSaga)
}