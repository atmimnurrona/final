import { put, takeLatest } from "redux-saga/effects"
import {
  FIND_ALL_CUSTOMER_FAILURE,
  FIND_ALL_CUSTOMER_SUCCESS,
  FIND_ALL_CUSTOMER,

  SAVE_CUSTOMER,
  SAVE_CUSTOMER_FAILURE,
  SAVE_CUSTOMER_SUCCESS,

  FIND_CUSTOMER_BY_ID,
  FIND_CUSTOMER_BY_ID_FAILURE,
  FIND_CUSTOMER_BY_ID_SUCCESS,

  UPDATE_CUSTOMER, FIND_CUSTOMER_BY_SUBMITTER_SUCCESS, FIND_CUSTOMER_BY_SUBMITTER_FAILURE, FIND_CUSTOMER_BY_SUBMITTER

} from "../constants/actions"
import axios from "../api"
import pagination from "./pagination";

function* findAllCustomerSaga(action) {
  let parameter = pagination(action)

  parameter = parameter.replace(/\s+/g, '+')

  let result = yield axios.get(`/customer?${parameter}`)
    .then(data => {
      return ({
        type: FIND_ALL_CUSTOMER_SUCCESS,
        data: data.list,
        pagination: {
          size: data.size,
          total: data.total,
          page: data.page
        },
      })
    })
    .catch(err => {
      return ({
        type: FIND_ALL_CUSTOMER_FAILURE,
        error: err
      })
    })
  yield put(result)
}

function* saveCustomerSaga(action) {
  let model = action.model;
  let method = 'POST', url = '/customer';
  if (model.id) {
    method = "PATCH";
    url += `/${model.id}`
  }

  let result = yield axios({
    url: url,
    method: method,
    data: model
  })
    .then( data => {
      return {
        type: SAVE_CUSTOMER_SUCCESS,
        data: data
      }
    })
    .catch(e => {
      return {
        type: SAVE_CUSTOMER_FAILURE,
        error: e
      }
    })
    yield put(result)
}

function* findCustomerByIdSaga(action) {
  let result = yield axios.get(`/customer/${action.id}`)
      .then(data => {
        return ({
          type: FIND_CUSTOMER_BY_ID_SUCCESS,
          data: data
        })
      })
      .catch(e => {
        return ({
          type: FIND_CUSTOMER_BY_ID_FAILURE,
          error: e
        })
      })
  yield put(result)
}

function* findCustomerByStaffSaga(action) {
  let parameter = pagination(action)

  // console.log("PARAMETER: ", action)

  parameter = parameter.replace(/\s+/g, '+')
  let result = yield axios.get(`/customer/principal?${parameter}`)
      .then(data => {
        return ({
          type: FIND_CUSTOMER_BY_SUBMITTER_SUCCESS,
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
          type: FIND_CUSTOMER_BY_SUBMITTER_FAILURE,
          error: e
        })
      })
  yield put(result)
}

function* updateCustomerSaga(action) {
  let result = false

  yield put({
    type: UPDATE_CUSTOMER,
    data: result
  })
}


export function* watchFindAllCustomer() {
  yield takeLatest(FIND_ALL_CUSTOMER, findAllCustomerSaga)
}

export function* watchSaveCustomer() {
  yield takeLatest(SAVE_CUSTOMER, saveCustomerSaga)
}

export function* watchFindCustomerById() {
  yield takeLatest(FIND_CUSTOMER_BY_ID, findCustomerByIdSaga)
}

export function* watchUpdateCustomer() {
  yield takeLatest(UPDATE_CUSTOMER, updateCustomerSaga)
}

export function* watchFindAllCustomerByStaffSaga() {
  yield takeLatest(FIND_ALL_CUSTOMER, findCustomerByStaffSaga)
}
